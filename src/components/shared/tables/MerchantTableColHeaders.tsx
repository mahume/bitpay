import {TableHead, TableHeader, TableRow} from "./index";

const MerchantTableColHeaders = () => (
    <TableHead>
        <TableRow>
            <TableHeader flex={1} text="Merchant"/>
            <TableHeader flex={1} text="Item"/>
            <TableHeader
                flex={1}
                textAlign="right"
                text="Amount (Crypto)"
            />
            <TableHeader flex={1} text="Currency"/>
            <TableHeader
                flex={1}
                textAlign="right"
                text="Price/crypto (USD)"
            />
            <TableHeader
                flex={1}
                textAlign="right"
                text="Amount (USD)"
            />
            <TableHeader flex={0.2}/>
        </TableRow>
    </TableHead>
);

export default MerchantTableColHeaders;
