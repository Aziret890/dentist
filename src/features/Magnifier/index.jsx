import React, { useState, useEffect } from 'react'
import './index.scss'

const Magnifier = ({ zoomFactor, children }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [isVisible, setIsVisible] = useState(false)

	const handleMouseMove = e => {
		const rect = e.target.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		setPosition({ x, y })
	}

	const handleMouseEnter = () => {
		setIsVisible(true)
	}

	const handleMouseLeave = () => {
		setIsVisible(false)
	}

	useEffect(() => {
		const magnifier = document.getElementById('magnifier')

		if (isVisible) {
			const offsetX = position.x * (zoomFactor - 1)
			const offsetY = position.y * (zoomFactor - 1)

			magnifier.style.transform = `scale(${zoomFactor})`
			magnifier.style.transformOrigin = `${position.x}px ${position.y}px`
		}
	}, [position, isVisible, zoomFactor])

	return (
		<div
			id='magnifier'
			className={`magnifier ${isVisible ? 'visible' : ''}`}
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	)
}

export default Magnifier
