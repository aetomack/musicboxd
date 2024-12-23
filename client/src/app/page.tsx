"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react';

export default function Page() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    // Access `window.location.search` only on the client
    const queryCode = new URLSearchParams(window.location.search).get('code');
    setCode(queryCode);
  }, []); // Run once on mount

  return code ? <Dashboard code={code} /> : <Login />;
}
