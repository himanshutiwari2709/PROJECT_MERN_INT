import { API_URL } from "./utils";

const handleApiResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
};

const handleApiError = (error) => {
    console.error('API Error:', error);
    return {
        success: false,
        message: error.message || 'An unexpected error occurred',
        data: null
    };
};

export const CreateTask = async (taskObj) => {
    const url = `${API_URL}/tasks`;
    console.log('Creating task at URL:', url);
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskObj)
        });
        return await handleApiResponse(response);
    } catch (err) {
        return handleApiError(err);
    }
};

export const GetAllTasks = async () => {
    const url = `${API_URL}/tasks`;
    console.log('Fetching tasks from URL:', url);
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await handleApiResponse(response);
    } catch (err) {
        return handleApiError(err);
    }
}

export const DeleteTaskById = async (id) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ', url)
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        return err;
    }
}


export const UpdateTaskById = async (id, reqBody) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ', url)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        return err;
    }
}
