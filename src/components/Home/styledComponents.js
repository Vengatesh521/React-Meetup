import styled from 'styled-components'

// Container for general layout
export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
`

// Navigation Bar
export const NavBar = styled.nav`
  padding: 20px;
  background-color: #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Logo in the navigation bar
export const Logo = styled.img`
  width: 150px;
`

// Main Content Wrapper
export const ContentWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// Heading for the page
export const Heading = styled.h1`
  font-size: 24px;
  color: #334155;
  text-align: center;
`

// Paragraph for general content
export const Paragraph = styled.p`
  font-size: 16px;
  color: #475569;
  text-align: center;
  margin-bottom: 20px;
`

// Button for Register action
export const RegisterButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #3b82f6;
  }
`

// Image for meetup section
export const MeetupImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 20px;
`

// Input field
export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #64748b;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`

// Select field for topics
export const SelectField = styled.select`
  padding: 10px;
  border: 1px solid #64748b;
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`

// Error message styling
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 10px;
`

// Form container
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`
