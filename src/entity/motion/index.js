
const variants = {
	hidden: {
		opacity: 0,
		scale: 0
	},
	visible: { opacity: 1, scale: 1 }
}

export const defaultMotion = {
	variants: { variants },
	initial: 'hidden',
	animate: 'visible',
	transition: {
		spring: {
			delay: 0.15,
			ease: 'easeInOut',
			duration: 0.3
		}
	},
	viewport: { '': { amount: 0 } }
}
