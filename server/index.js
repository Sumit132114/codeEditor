const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Code Editor Backend is running');
});

app.get('/runtimes', async (req, res) => {
    try {
        const response = await axios.get('https://emkc.org/api/v2/piston/runtimes');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch runtimes' });
    }
});

app.post('/execute', async (req, res) => {
    const { language, version, code } = req.body;
    try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language,
            version,
            files: [{ content: code }]
        });
        res.json(response.data);
    } catch (error) {
        console.error('Piston Execution Error:', error.response ? error.response.data : error.message);

        // Mock Fallback
        console.warn('Falling back to mock execution mode.');
        const mockOutput = `[MOCK EXECUTION]\nNote: Public Piston API is restricted.\n\nSimulated Output for ${language} (${version}):\n----------------------------------\n${code}\n----------------------------------\nExecution complete.`;

        res.json({
            run: {
                stdout: mockOutput,
                stderr: "",
                output: mockOutput,
                code: 0,
                signal: null
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
