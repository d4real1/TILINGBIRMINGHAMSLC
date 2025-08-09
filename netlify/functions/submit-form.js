exports.handler = async function(event, context) {
    try {
        const data = JSON.parse(event.body);
        // Simulate storing form data (e.g., send to email or database)
        console.log('Form submission:', data);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully!' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error processing form.' })
        };
    }
};
