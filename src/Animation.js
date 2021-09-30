export const productAnim = {
	hidden: {
		scale: 0.9
	},
	show: {
		scale: 1,
		transition: {
			duration: 0.3,
			ease: 'easeOut'
		}
	}
};

export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.5 }
	},
	exit: {
		opacity: 0,

		transition: { duration: 0.5, delay: 0.2 }
	}
};