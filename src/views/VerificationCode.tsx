import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { CodeInputContainer, CodeInput, commonStyles, gridElements, formField } from "../styles/mui";
import { Grid } from '@mui/system';
import { Link } from 'react-router-dom';

export default function VerificationCode() {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

    const handleInputChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Si hay un valor ingresado y no estamos en el último input, mueve el foco al siguiente
            if (value !== '' && index < 3) {
                inputRefs[index + 1].current?.focus();
            }
        }
    };

    const handleKeyPress = (index: number, key: string) => {
        // Si el input actual está vacío, mueve el foco al anterior al presionar Backspace
        if (key === 'Backspace') {
            if (index > 0 && code[index] === '') {
                inputRefs[index - 1].current?.focus();
            }
        }
    };

    useEffect(() => {
        // Al cargar el componente, enfocar el primer input
        inputRefs[0].current?.focus();
    }, []);

    return (
        <Grid container spacing={2}>
            {/* Section 1 */}
            <Grid
                size={{ sm: 6 }}
                sx={{
                    ...commonStyles,
                    height: "100vh",
                    display: { sm: "block", xs: "none" },
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        background: "linear-gradient(#bfc3fc, #a2c3fc)",
                        borderRadius: "0 150px 150px 0",
                    }}
                ></Box>
            </Grid>

            {/* section 2 */}
            <Grid size={{ sm: 6, xs: 12 }}
                sx={{
                    ...commonStyles,
                    alignItems: "center",
                    minHeight: "100vh",
                    padding: 2,
                    gap: 6,
                }}>
                <Box sx={{
                    ...commonStyles,
                    ...gridElements,
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                        Phone verification
                    </Typography>
                    <Typography variant="body1">
                        Enter the four-digit code from SMS.
                    </Typography>
                    
                    <CodeInputContainer>
                        {code.map((digit, index) => (
                            <CodeInput
                                sx={formField}
                                key={index}
                                inputRef={inputRefs[index]}
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyPress(index, e.key)}
                                variant="outlined"
                            />
                        ))}
                    </CodeInputContainer>

                    <Typography variant="subtitle1">
                        SMS not received <Link to="#">
                            Send again?
                        </Link>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};