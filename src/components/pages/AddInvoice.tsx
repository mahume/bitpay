import {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {Form, Input, Label, Option, Select} from "../shared/forms";
import Paragraph from "../shared/texts/Paragraph";
import CardFooter from "../cards/CardFooter";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import SecondaryButton from "../shared/buttons/SecondaryButton";
import useInvoices from "../../hooks/useInvoices";
import {Invoice} from "../../types/merchants";
import {CryptoCurrency} from "../../types/currency";

const StyledInputContainer = styled.div`
  margin-bottom: 25px;
  margin-right: 25px;
`;
const StyledCurrencyContainer = styled.div`
  display: flex;
`;

const AddInvoice = () => {
    const {addInvoice, invoices} = useInvoices();
    const [merchant, setMerchant] = useState("");
    const [item, setItem] = useState("");
    const [amount, setAmount] = useState<number | string>("");
    const [currency, setCurrency] = useState<CryptoCurrency | number>(0);

    const [canAddInvoice, setCanAddInvoice] = useState(false);
    const [canClearForm, setCanClearForm] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        switch (name) {
            case "merchant":
                setMerchant(value);
                break;
            case "item":
                setItem(value);
                break;
            case "amount":
                setAmount(Number(value));
                break;
        }
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target;
        setCurrency(parseInt(value));
    }

    const handleSubmit = () => {
        if (typeof amount === 'string' || currency === 0) return;

        const invoice: Invoice = {
            id: (invoices.length + 1).toString(),
            merchant,
            item,
            payment: {
                amount,
                currency,
            }
        }
        addInvoice(invoice);
        clearForm();
    };

    const clearForm = () => {
        setMerchant("");
        setItem("");
        setAmount("");
        setCurrency(0);

        setCanClearForm(false);
        setCanAddInvoice(false);
    }

    useEffect(() => {
        // Check if any of the inputs have a value
        const someInputsFilled = (merchant.length > 0 || item.length > 0 || amount > 0 || currency > 0)
        const allInputsFilled = Boolean(merchant) && Boolean(item) && Boolean(amount) && Boolean(currency);

        if (someInputsFilled) setCanClearForm(true);
        if (allInputsFilled) setCanAddInvoice(true);
    }, [merchant, item, amount, currency]);

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
                        value={merchant}
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
                        value={item}
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
                            value={amount}
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
                        <Select onChange={handleSelectChange} name="currency" value={currency}>
                            <Option value={0}>Select</Option>
                            <Option value={CryptoCurrency.BCH}>BCH</Option>
                            <Option value={CryptoCurrency.BTC}>BTC</Option>
                            <Option value={CryptoCurrency.ETH}>ETH</Option>
                        </Select>
                    </StyledInputContainer>
                </StyledCurrencyContainer>
            </Form>
            <CardFooter>
                <PrimaryButton
                    text="Add"
                    onClick={handleSubmit}
                    isDisabled={!canAddInvoice}
                />
                <SecondaryButton
                    text="Clear"
                    onClick={clearForm}
                    isVisible={canClearForm}
                />
            </CardFooter>
        </>
    )
};

export default AddInvoice;
