import { useState, useCallback, useEffect, useRef } from 'react'

export const useDropDown = ({ initialSelectedItem, items, isState }) => {
	const [selectedItem, setSelectedItem] = useState(initialSelectedItem)
	const [isOpen, setIsOpen] = useState(isState || false)
	const dropDownRef = useRef(null)

	function handleSelectItem(data) {
		if (typeof selectedItem === 'string') {
			setSelectedItem(data)
			localStorage.setItem('selectedItem', data || '')
		}
	}

	function toggleDropDown(d) {
		setIsOpen(prev => d || !prev)
	}

	const closeDropDown = useCallback(() => {
		setIsOpen(false)
	}, [setIsOpen])

	const handleDocumentClick = useCallback(
		event => {
			if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
				closeDropDown()
			}
		},
		[closeDropDown, dropDownRef]
	)

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick)
		document.addEventListener('mouseout', handleDocumentClick)

		return () => {
			document.removeEventListener('click', handleDocumentClick)
			document.addEventListener('mouseout', handleDocumentClick)
		}
	}, [handleDocumentClick, dropDownRef])

	return {
		selectedItem,
		items,
		isOpen,
		closeDropDown,
		toggleDropDown,
		onSelectItem: handleSelectItem,
		dropDownRef
	}
}
