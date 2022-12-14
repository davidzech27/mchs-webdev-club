const screenDimensions = {
	vw: {
		mobile: 320,
		desktop: 1440
	},
	vh: {
		mobile: 568,
		desktop: 825
	}
}

const useResponsiveDimension = ({ mobile, desktop, responsiveUnit = "vw" }) => {
	const slope =
		(desktop - mobile) /
		(screenDimensions[responsiveUnit].desktop -
			screenDimensions[responsiveUnit].mobile)
	const yIntercept = mobile - screenDimensions[responsiveUnit].mobile * slope
	return `calc(${100 * slope}${responsiveUnit} + ${yIntercept}px)`
}

export default useResponsiveDimension
