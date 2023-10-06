import {
  BOWL_CAPACITY_TOOLTIP,
  COAL_CONSUMPTION_PER_HOOKAH_TOOLTIP,
  COAL_PRICE_PER_KG_TOOLTIP,
  HOOKAH_ADDITIONAL_EXPENSES,
  HOOKAH_MENU_PRICE,
  PROFILE_AVATAR,
  PROFILE_EMAIL,
  PROFILE_PASSWORD,
  PROFILE_USERNAME,
  SALARY_PER_ONE_HOOKAH,
  SECOND_TOBACCO_PRICE_TOOLTIP,
  SECOND_TOBACCO_WEIGHT_TOOLTIP,
  TOBACCO_PRICE_TOOLTIP,
  TOBACCO_WEIGHT_TOOLTIP,
} from './string.constants';

type SelectType = {
  value: string;
  label: string;
};

type SelectAmountType = {
  value: 'one' | 'two'; 
  label: string;
}

export const BRANDS_SELECT: ReadonlyArray<SelectAmountType> = [
  { value: 'one', label: '1' },
  { value: 'two', label: '2' },
];

export const COAL_PIECES_PER_KG_SELECT: SelectType[]   = [
  { value: '72', label: '72' },
  { value: '96', label: '96' },
  { value: '108', label: '108' },
  { value: '112', label: '112' },
];

export const BOWL_PERCENTAGE_FIRST_SELECT: SelectType[] = [
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '30', label: '30' },
  { value: '40', label: '40' },
  { value: '50', label: '50' },
  { value: '60', label: '60' },
  { value: '70', label: '70' },
  { value: '80', label: '80' },
  { value: '90', label: '90' },
];

type FieldType = {
  id: string;
  name: string;
  label: string;
  tooltip: string;
};

//? Tobacco
export const TOBACCO_FIELDS_FOR_ONE: ReadonlyArray<FieldType> = [
  {
    id: 'tobacco-price',
    name: 'tobaccoPrice',
    label: 'price',
    tooltip: TOBACCO_PRICE_TOOLTIP,
  },
  {
    id: 'tobacco-weight',
    name: 'tobaccoWeight',
    label: 'weight',
    tooltip: TOBACCO_WEIGHT_TOOLTIP,
  },
];

export const TOBACCO_FIELDS_FOR_TWO: ReadonlyArray<FieldType> = [
  {
    id: 'tobacco-price',
    name: 'tobaccoPrice',
    label: 'first price',
    tooltip: TOBACCO_PRICE_TOOLTIP,
  },
  {
    id: 'tobacco-weight',
    name: 'tobaccoWeight',
    label: 'first weight',
    tooltip: TOBACCO_WEIGHT_TOOLTIP,
  },
  {
    id: 'second-tobacco-price',
    name: 'secondTobaccoPrice',
    label: 'second price',
    tooltip: SECOND_TOBACCO_PRICE_TOOLTIP,
  },
  {
    id: 'second-tobacco-weight',
    name: 'secondTobaccoWeight',
    label: 'second weight',
    tooltip: SECOND_TOBACCO_WEIGHT_TOOLTIP,
  },
];

//? Coal
export const COAL_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'coal-price-kg',
    name: 'coalPriceKg',
    label: 'price per kg',
    tooltip: COAL_PRICE_PER_KG_TOOLTIP,
  },
  {
    id: 'coal-consumption',
    name: 'coalConsumption',
    label: 'consumption per hookah',
    tooltip: COAL_CONSUMPTION_PER_HOOKAH_TOOLTIP,
  },
];

//? Bowl
export const BOWL_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'bowl-capacity',
    name: 'bowlCapacity',
    label: 'capacity',
    tooltip: BOWL_CAPACITY_TOOLTIP,
  },
];

//? Hookah 
export const HOOKAH_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'hookah-price',
    name: 'hookahPrice',
    label: 'price',
    tooltip: HOOKAH_MENU_PRICE
  },
  {
    id: 'salary-per-one-hookah',
    name: 'salaryPerOneHookah',
    label: 'salary per one hookah',
    tooltip: SALARY_PER_ONE_HOOKAH
  },
  {    
    id: 'additional-expenses',
    name: 'additionalExpenses',
    label: 'additional expenses',
    tooltip: HOOKAH_ADDITIONAL_EXPENSES
  },
]

//? Profile
export const PROFILE_UPDATE_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'name',
    name: 'name',
    label: 'user name',
    tooltip: PROFILE_USERNAME
  },
  {
    id: 'user-image',
    name: 'image',
    label: 'user image',
    tooltip: PROFILE_AVATAR
  },
]

//? SignUp

export const SIGN_UP_FIELDS: ReadonlyArray<FieldType> = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    tooltip: PROFILE_EMAIL
  },
  {
    id: 'name',
    name: 'name',
    label: 'name',
    tooltip: PROFILE_USERNAME
  },
  {
    id: 'password',
    name: 'password',
    label: 'password',
    tooltip: PROFILE_PASSWORD
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'confirm password',
    tooltip: PROFILE_PASSWORD
  },
]

