import { useState } from "react";
import styled from "styled-components";

interface SearchFormProps {
  onSubmit: (location: string) => void;
  isLoading: boolean;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 1rem;
  flex: 1;
  min-width: 420px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.main};

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary}90;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}30;
  }
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SearchForm = ({ onSubmit, isLoading }: SearchFormProps) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSubmit(location.trim());
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Voer een locatie in (bijv. Amsterdam, Parijs, Tokyo)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !location.trim()}>
        {isLoading ? "Bezig..." : "Genereer gedicht"}
      </Button>
    </Form>
  );
};

export default SearchForm;
