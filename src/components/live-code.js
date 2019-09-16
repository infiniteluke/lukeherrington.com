import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/oceanicNext';

export default ({ code, ...props }) => (
  <LiveProvider
    code={code}
    theme={theme}
    {...props}
  >
    <LiveEditor style={{ borderRadius: '12px', margin: '20px 0' }} />
    {!props.disabled && <LiveError />}
    {!props.disabled && <LivePreview
      style={{ padding: '30px', display: 'flex', justifyContent: 'center' }}
    />}
  </LiveProvider>

)