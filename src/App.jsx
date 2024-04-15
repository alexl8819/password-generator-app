import { useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import copy from 'clipboard-copy';

import Title from './components/Title';
import StrengthRating from './components/StrengthRating';
import PasswordBar from './components/PasswordBar';
import PasswordOptions from './components/PasswordOptions';
import PasswordGenerationForm from './components/ActionForm';

import { calculateNumeric } from './util/rating';
import create from './util/password';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const CHAR_FIELDS = Object.freeze({
  Uppercase: 'u',
  Lowercase: 'l',
  Numbers: 'n',
  Symbols: 's'
});

function App() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [charLength, setCharLength] = useState(10);
  const [charFields, setCharFields] = useState(new Set());

  const sendToClipboard = async () => {
    try {
      await copy(generatedPassword);
    } catch (err) {
      toast.error('Failed to copy to clipboard - please open an issue with OS and browser information');
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    setGeneratedPassword(create(Object.freeze({
      includesLowercase: charFields.has(CHAR_FIELDS.Lowercase),
      includesUppercase: charFields.has(CHAR_FIELDS.Uppercase),
      includesNumbers: charFields.has(CHAR_FIELDS.Numbers),
      includesSymbols: charFields.has(CHAR_FIELDS.Symbols)
    }), charLength));
  };

  const formOptions = Object.freeze({
    charLength: {
      label: 'Character Length',
      name: 'charlength',
      min: 6,
      max: 20,
      currentValue: charLength,
      onChange: (value) => setCharLength(value)
    },
    includes: [
      {
        label: 'Include Uppercase Letters',
        name: 'uppercase',
        currentValue: charFields.has(CHAR_FIELDS.Uppercase),
        onChange: () => setCharFields((prevChars) => {
          const nextState = new Set(prevChars);

          if (charFields.has(CHAR_FIELDS.Uppercase)) {
            nextState.delete(CHAR_FIELDS.Uppercase);
          } else {
            nextState.add(CHAR_FIELDS.Uppercase);
          }

          return nextState;
        })
      },
      {
        label: 'Include Lowercase Letters',
        name: 'lowercase',
        currentValue: charFields.has(CHAR_FIELDS.Lowercase),
        onChange: () => setCharFields((prevChars) => {
          const nextState = new Set(prevChars);

          if (charFields.has(CHAR_FIELDS.Lowercase)) {
            nextState.delete(CHAR_FIELDS.Lowercase);
          } else {
            nextState.add(CHAR_FIELDS.Lowercase);
          }
            
          return nextState;
        })
      },
      {
        label: 'Include Numbers',
        name: 'numbers',
        currentValue: charFields.has(CHAR_FIELDS.Numbers),
        onChange: () => setCharFields((prevChars) => {
          const nextState = new Set(prevChars);

          if (charFields.has(CHAR_FIELDS.Numbers)) {
            nextState.delete(CHAR_FIELDS.Numbers);
          } else {
            nextState.add(CHAR_FIELDS.Numbers);
          }
            
          return nextState;
        })
      },
      {
        label: 'Include Symbols',
        name: 'symbols',
        currentValue: charFields.has(CHAR_FIELDS.Symbols),
        onChange: () => setCharFields((prevChars) => {
          const nextState = new Set(prevChars);

          if (charFields.has(CHAR_FIELDS.Symbols)) {
            nextState.delete(CHAR_FIELDS.Symbols);
          } else {
            nextState.add(CHAR_FIELDS.Symbols);
          }
            
          return nextState;
        })
      }
    ],
  });

  const calculateRating = useMemo(() => calculateNumeric(charFields), [charFields]);
  const canGenerate = useMemo(() => charFields.size > 0, [charFields]);

  return (
    <main className="app">
      <div className="container">
        <Title text="Password Generator" />
        <div>
          <PasswordBar passwordCopy={generatedPassword} onCopy={sendToClipboard} />
          <PasswordGenerationForm onSubmit={onSubmit} canGenerate={canGenerate}>
            <PasswordOptions options={formOptions} />
            <StrengthRating rating={calculateRating} />
          </PasswordGenerationForm>
        </div>
        <ToastContainer pauseOnFocusLoss={false} autoClose={5000} hideProgressBar />
      </div>
    </main>
  );
}

export default App;
