
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'davidrunemalm_service';
const TEMPLATE_ID = 'template_o1gz46r';
const PUBLIC_KEY = 'Fi1hCRMY3gpbecXDb';

const Index = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('error');
      });
  };

  return (
    <div
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        color: '#000',
        background: '#fff',
      }}
      className="min-h-screen"
    >
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: '2em', margin: '0 0 0.2em 0' }}>David Runemalm</h1>
        <p style={{ margin: '0 0 1em 0', fontStyle: 'italic' }}>
          Senior Software Engineer
        </p>
        <hr />

        <h2 style={{ fontSize: '1.4em', marginTop: '1.2em' }}>Site under construction</h2>
        <p>
          This page is being rebuilt. A new version will be available shortly.
          In the meantime, you can reach me by email below or at{' '}
          <a href="mailto:david.runemalm@gmail.com" style={linkStyle}>
            david.runemalm@gmail.com
          </a>
          .
        </p>

        <h2 style={{ fontSize: '1.4em', marginTop: '1.5em' }}>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <table cellPadding={6} style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={labelCellStyle}>
                  <label htmlFor="name">Name:</label>
                </td>
                <td>
                  <input id="name" name="name" type="text" required style={inputStyle} />
                </td>
              </tr>
              <tr>
                <td style={labelCellStyle}>
                  <label htmlFor="email">Email:</label>
                </td>
                <td>
                  <input id="email" name="email" type="email" required style={inputStyle} />
                </td>
              </tr>
              <tr>
                <td style={{ ...labelCellStyle, verticalAlign: 'top' }}>
                  <label htmlFor="message">Message:</label>
                </td>
                <td>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    style={{ ...inputStyle, width: 360, fontFamily: 'inherit' }}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send'}
                  </button>
                  {status === 'sent' && (
                    <span style={{ marginLeft: 12, color: 'green' }}>
                      Message sent. Thank you.
                    </span>
                  )}
                  {status === 'error' && (
                    <span style={{ marginLeft: 12, color: 'red' }}>
                      Failed to send. Please try again.
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <hr style={{ marginTop: '2em' }} />
        <p style={{ fontSize: '0.85em' }}>
          <a href="https://github.com/runemalm" style={linkStyle}>
            github.com/runemalm
          </a>
          {' · '}
          Last updated: May 2026
        </p>
      </div>
    </div>
  );
};

const linkStyle: React.CSSProperties = {
  color: '#0000ee',
  textDecoration: 'underline',
};

const labelCellStyle: React.CSSProperties = {
  textAlign: 'right',
  whiteSpace: 'nowrap',
};

const inputStyle: React.CSSProperties = {
  width: 260,
  padding: '2px 4px',
  fontFamily: 'inherit',
  fontSize: '1em',
};

export default Index;
