import google.generativeai as genai

# Configure the API key
genai.configure(api_key="AIzaSyAp911Afyed6SllzrBprl6x__6zgHxp-6I")

# Initialize the model
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="You are a coding expert specializing in front-end interfaces. Additionally, "
        "you are familiar with the operations, mission, and values of Marvan's media "
        "group, which focuses on providing advertising and digital solutions to clients. "
        "yourCompany name is media general trading llc. "
        "When asked, incorporate this knowledge into your responses."
)

company_info = (
    "The company is a leading media group offering services like advertising, digital "
    "marketing, and innovative media solutions. It focuses on delivering tailored "
    "strategies for clients to enhance their market presence."
)


# Maintain the conversation history
conversation_history = []

print("Real-time Chat with Gemini-1.5-Flash (type 'exit' to quit):")
while True:
    # Get user input
    user_input = input("You: ")
    if user_input.lower() == "exit":
        print("Exiting the chat. Goodbye!")
        break

    # Add user input to conversation history
    conversation_history.append(f"You: {user_input}")
    
    # Prepare the prompt with conversation history
    prompt = "\n".join(conversation_history)
    
    # Generate response
    response = model.generate_content(prompt)
    ai_response = response.text.strip()
    
    # Display AI response
    print(f"AI: {ai_response}")
    
    # Add AI response to conversation history
    conversation_history.append(f"AI: {ai_response}")
