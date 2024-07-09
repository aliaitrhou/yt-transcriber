# if you wanna use open-ai (paid):
from transformers import MarianMTModel, MarianTokenizer
import os
import sys
import openai
import pysrt
from openai import OpenAI
client = OpenAI()

openai.api_key = os.getenv('OPENAI_API_KEY')
input_data = sys.stdin.read()
subs = pysrt.from_string(input_data)

# prompt_base = (
#     "You are going to be a good translator. "
#     "Here is a part of the transcript of my vlog. "
#     "Translate the following text precisely into Moroccan Darja "
#     "Translate from [START] to [END]:\n[START]"
# )
#
#
# def translate_text(text):
#     prompt = prompt_base
#     prompt += text + "\n[END]"
#     response = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         max_tokens=3000,
#         temperature=0,
#         messages=[
#             {"role": "system", "content": prompt},
#         ]
#     )
#     return response.choices[0].message.strip()
#
#
# for index, subtitle in enumerate(subs):
#     subtitle.text = translate_text(subtitle.text)
#     print(subtitle)


# if you wanna use Hugging-face (free)
# Choose the model and tokenizer
model_name = "Helsinki-NLP/opus-mt-en-ar"


def translate_text(text):
    tokenizer = MarianTokenizer.from_pretrained(
        model_name, direction="rtl", add_prefix_space=True)

    model = MarianMTModel.from_pretrained(model_name)
    inputs = tokenizer(text, return_tensors="pt", truncation=True)
    outputs = model.generate(**inputs)
    response = tokenizer.decode(
        outputs[0], skip_special_tokens=True, clean_up_tokenization_spaces=True)
    return response


for index, subtitle in enumerate(subs):
    subtitle.text = translate_text(subtitle.text)
    print(subtitle, flush=True)
