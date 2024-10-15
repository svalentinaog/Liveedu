import { useState, useRef, useEffect } from 'react';

export const useVerificationCode = () => {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const handleInputChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Si hay un valor ingresado y no estamos en el último input, mover foco al siguiente
            if (value !== '' && index < 3) {
                inputRefs[index + 1].current?.focus();
            }
        }
    };

    const handleKeyPress = (index: number, key: string) => {
        // Si el input actual está vacío, mover foco al anterior al presionar Backspace
        if (key === 'Backspace') {
            if (index > 0 && code[index] === '') {
                inputRefs[index - 1].current?.focus();
            }
        }
    };

    useEffect(() => {
        // Al cargar componente, enfocar el primer input
        inputRefs[0].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        code,
        inputRefs,
        handleInputChange,
        handleKeyPress,
    };
};
