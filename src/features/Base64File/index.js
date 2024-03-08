export const handleImageUpload = (e, setBase64String) => {
	const file = e.target.files[0]

	if (file) {
		const reader = new FileReader()

		reader.onload = function (e) {
			const base64String = e.target.result.split(',')[1]
			setBase64String(base64String)
		}

		reader.readAsDataURL(file)
	}
}
