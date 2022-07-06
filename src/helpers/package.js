import LabelBasic from "../assets/images/packageCard/basic.svg";
import LabelSilver from "../assets/images/packageCard/silver.svg";
import LabelGold from "../assets/images/packageCard/gold.svg";


export const packageProps = [
    {
        type: 'basic',
        valueBnz: 700,
        parcel: '4x R$350,00',
        valueR: 1400,
        free: 100,
        label: LabelBasic
    },
    {
        type: 'silver',
        valueBnz: 1500,
        parcel: '6x R$500,00',
        valueR: 3000,
        free: 200,
        label: LabelSilver
    },
    {
        type: 'gold',
        valueBnz: 3000,
        parcel: '10x R$600,00',
        valueR: 6000,
        free: 300,
        label: LabelGold
    },
]