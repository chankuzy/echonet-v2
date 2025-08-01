export async function createUser(formData: FormData) {
    try {
        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });
        if (! response.ok) {
            const errorData = await response.json();
            return errorData;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function loginUser(formData: FormData) {
    try {
        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });
        if (! response.ok) {
            const errorData = await response.json();
            return errorData;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}