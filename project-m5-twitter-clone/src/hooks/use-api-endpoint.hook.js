import React from 'react';

export default function useApiEndpoint(endpoint) {
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState('loading');

  const execute = () => {
    fetch(`/api${endpoint}`)
      .then(res => res.json())
      .then(data => {
        setData(data);

        if (data.error) {
          setStatus('error');
        } else {
          setStatus('idle');
        }
      })
      .catch(err => {
        setData(err);
        setStatus('error');
      });
  };

  React.useEffect(execute, []);

  return [data, status, execute];
}
