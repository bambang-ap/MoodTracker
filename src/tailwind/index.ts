import colors from 'tailwindcss/colors';
import tailwindConfig from '../../tailwind.config';

const configColor = tailwindConfig.theme?.extend?.colors as unknown as Record<
	'happy' | 'sad' | 'neutral' | 'stress',
	Record<'DEFAULT' | '50', string>
>;

export {colors, configColor};
