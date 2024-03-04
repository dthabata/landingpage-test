const reasonService = {
    load: async () => {
        try {
            let response = await fetch('https://mocki.io/v1/f42fca53-2029-4808-b429-edf21834d002')
            return await response.json()
            } catch (error) {
                console.error(error);
                return [];
            }
        }
}

export default reasonService;
