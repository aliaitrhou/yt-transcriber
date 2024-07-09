import React from 'react';
import * as Form from '@radix-ui/react-form';
import { styled } from '@stitches/react';

type Props = {
  onSubmit: (videoUrl: string) => void;
  isProcessing: boolean;
  styles: {};
};

export const VideoForm: React.FC<Props> = ({
  onSubmit,
  isProcessing,
  styles
}) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const videoUrl = (e.target as HTMLFormElement | undefined)?.videoUrl
      ?.value as string;
    onSubmit(videoUrl);
  };
  return (
    <FormRoot onSubmit={handleSubmit} css={styles}>
      <FormField name="videoUrl">
        <Flex css={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
          <FormLabel css={{ color: 'black' }}>Video URL</FormLabel>
          <FormMessage match="valueMissing">
            Please enter a video URL
          </FormMessage>
          <FormMessage match="typeMismatch">
            Please provide a valid URL
          </FormMessage>
        </Flex>
        <Form.Control asChild>
          <Input
            type="text"
            name="videoUrl"
            required
            placeholder="https://youtube.com/watch?v="
          />
        </Form.Control>
      </FormField>
      <Form.Submit asChild>
        <Button css={{ marginTop: 10 }} disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Start processing'}
        </Button>
      </Form.Submit>
    </FormRoot>
  );
};

const FormRoot = styled(Form.Root, {
  fontFamily: 'inconsolata, sans-serif'
  // src: "url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap')"
});

const FormField = styled(Form.Field, {
  display: 'grid',
  marginBottom: 10
});

const FormLabel = styled(Form.Label, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '35px',
  color: ''
});

const FormMessage = styled(Form.Message, {
  fontSize: 13,
  color: 'tomato',
  opacity: 0.8
});

const Flex = styled('div', { display: 'flex' });

const inputStyles = {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopRightRadius: 4,
  borderTopLeftRadius: 4,

  fontSize: 15,
  color: '$foreground',
  backgroundColor: '$red200',
  boxShadow: '0 0 0 2px tomato',
  '&:not(:disabled):hover': { boxShadow: `0 0 0 1px black` },
  '&:not(:disabled):focus': { boxShadow: `0 0 0 2px black` }
  // boxShadow: `0 0 0 1px $gray600`,
  // '&:hover': { boxShadow: `0 0 0 1px $gray600` },
  // '&:focus': { boxShadow: `0 0 0 2px $purple600` },
  // '&::selection': { backgroundColor: '$gray600', color: 'white' }
};

const Input = styled('input', {
  ...inputStyles,
  height: 35,
  textIndent: 4,
  lineHeight: 1,
  padding: '0 10px'
});

const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  width: '100%',

  '&:disabled': {
    opacity: 0.5
  },
  backgroundColor: '$red600',
  color: 'white',
  boxShadow: `0 2px 10px $red400`,
  '&:not(:disabled):hover': { backgroundColor: '$red500' },
  '&:not(:disabled):focus': { boxShadow: `0 0 0 1px black` }
});
