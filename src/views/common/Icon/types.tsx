enum VariantEnum {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    danger = 'danger',
    warning = 'warning'
}

type PropsType = {
    children: React.ReactNode;
    width?: number;
    height?: number;
    variant?: keyof typeof VariantEnum;
}

export type { PropsType }