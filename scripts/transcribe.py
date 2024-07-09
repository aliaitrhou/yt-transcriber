import os
import sys
import textwrap
# import openai
# from openai import OpenAI
# client = OpenAI()
# openai.api_key = os.getenv('OPENAI_API_KEY')

# if you want to use whisper (free):
import whisper
model = whisper.load_model("base")
video_id = sys.argv[1]
audio_file_path = os.path.join(os.getcwd(), 'tmp', video_id + '.m4a')
print(audio_file_path)
text = model.transcribe(audio_file_path)

# audio_file = open(audio_file_path, 'rb')
# transcript = client.audio.transcriptions.create(
#     file=audio_file,
#     model="whisper-1",
#     response_format="srt",
#     prompt='I am a programmer. My name is  Ali.'
# )
# print(transcript)


def text_to_srt(transcription):
    subtitles = []
    words_per_line = 40
    chars_per_second = 50  # Adjust this value based on average reading speed

    # Split the transcription into paragraphs and then into lines
    paragraphs = transcription.strip().split("\n")
    lines = []
    for paragraph in paragraphs:
        # Split into lines based on ". " to approximate sentence structure
        lines.extend(paragraph.split(". "))

    current_time = 0
    for i, line in enumerate(lines):
        # Split line into words
        words = line.split()

        # Wrap words into lines of approximately 7 words each
        wrapped_lines = textwrap.wrap(" ".join(words), width=words_per_line)

        for wrapped_line in wrapped_lines:
            # Calculate duration based on the number of characters in the line
            duration_seconds = max(1, len(wrapped_line) / chars_per_second)

            # Format start and end time in HH:MM:SS,ms format
            start_time = f"00:00:{current_time:02d},000"
            end_time = f"00:00:{current_time + duration_seconds:.3f}"

            # Create subtitle entry
            subtitle = f"{
                len(subtitles) + 1}\n{start_time} --> {end_time}\n{wrapped_line}\n\n"
            subtitles.append(subtitle)

            # Update current time for next subtitle
            current_time += duration_seconds

    return "".join(subtitles)


srt_text = text_to_srt(text["text"])
print(srt_text, flush=True)
