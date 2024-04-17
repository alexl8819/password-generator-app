import { useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import copy from 'clipboard-copy';

import Title from './components/Title';
import StrengthRating from './components/StrengthRating';
import PasswordBar from './components/PasswordBar';
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
  const [charLength, setCharLength] = useState(0);
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

    let generated = '';

    try {
      generated = create(Object.freeze({
        lowercase: charFields.has(CHAR_FIELDS.Lowercase),
        uppercase: charFields.has(CHAR_FIELDS.Uppercase),
        numbers: charFields.has(CHAR_FIELDS.Numbers),
        symbols: charFields.has(CHAR_FIELDS.Symbols)
      }), charLength);
    } catch (err) {
      toast.error(err.message);
    }
    
    setGeneratedPassword(generated);
  };

  const formOptions = Object.freeze({
    charLength: {
      label: 'Character Length',
      name: 'charlength',
      min: 0,
      max: 20,
      currentValue: charLength,
      onValueChange: (value) => setCharLength(value)
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
  const canGenerate = useMemo(() => charLength >= charFields.size && charFields.size > 0, [charLength, charFields]);

  return (
    <div className="app">
      <div className="container">
        <Title text="Password Generator" />
        <div>
          <PasswordBar passwordCopy={generatedPassword} onCopy={sendToClipboard} />
          <PasswordGenerationForm formOptions={formOptions} canGenerate={canGenerate} onSubmit={onSubmit}>
            <StrengthRating rating={calculateRating} />
          </PasswordGenerationForm>
        </div>
        <ToastContainer pauseOnFocusLoss={false} autoClose={5000} hideProgressBar />
      </div>
    </div>
  );
}

export default App;
