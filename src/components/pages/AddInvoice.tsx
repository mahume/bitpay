import {ChangeEvent} from "react";
import styled from "styled-components";
import {Form, Input, Label, Option, Select} from "../shared/forms";
import Paragraph from "../shared/texts/Paragraph";
import CardFooter from "../cards/CardFooter";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import SecondaryButton from "../shared/buttons/SecondaryButton";

const StyledInputContainer = styled.div`
  margin-bottom: 25px;
  margin-right: 25px;
`;
const StyledCurrencyContainer = styled.div`
  display: flex;
`;

const AddInvoice = () => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => '';
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => ''
    const handleSubmit = () => ''
    const clearForm = () => ''

    return (
        <>
            <Form>
                <StyledInputContainer>
                    <Label htmlFor="merchant">
                        <Paragraph
                            text="MERCHANT"
                            weight={500}
                            color="rgb(37, 37, 37)"
                            size="14px"
                            spacing="-0.1px"
                            height="1.2"
                        />
                    </Label>
                    <Input
                        value={''}
                        name="merchant"
                        type="text"
                        onChange={handleInputChange}
                    />
                </StyledInputContainer>
                <StyledInputContainer>
                    <Label htmlFor="item">
                        <Paragraph
                            text="ITEM"
                            weight={500}
                            color="rgb(37, 37, 37)"
                            size="14px"
                        />
                    </Label>
                    <Input
                        value={''}
                        name="item"
                        onChange={handleInputChange}
                        type="text"
                    />
                </StyledInputContainer>
                <StyledCurrencyContainer>
                    <StyledInputContainer>
                        <Label htmlFor="amount">
                            <Paragraph
                                text="AMOUNT (CRYPTO)"
                                weight={500}
                                color="rgb(37, 37, 37)"
                                size="14px"
                            />
                        </Label>
                        <Input
                            value={0}
                            name="amount"
                            onChange={handleInputChange}
                            type="number"
                        />
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <Label htmlFor="currency">
                            <Paragraph
                                text="CURRENCY"
                                weight={500}
                                color="rgb(37, 37, 37)"
                                size="14px"
                            />
                        </Label>
                        <Select onChange={handleSelectChange} name="currency" value={''}>
                            <Option value={0}>Select</Option>
                        </Select>
                    </StyledInputContainer>
                </StyledCurrencyContainer>
            </Form>
            <CardFooter>
                <PrimaryButton
                    text="Add"
                    onClick={handleSubmit}
                />
                <SecondaryButton
                    text="Clear"
                    onClick={clearForm}
                />
            </CardFooter>
        </>
    )
};

export default AddInvoice;
