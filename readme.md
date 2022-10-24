# Confirm Modal Example

## Usage

To use this, import the js file before `</body>`.

```html
<script src="confirmation.js"></script>
```

and css within `<head>`

```html
<link rel="stylesheet" href="confirmation.css">
```

When you're done, add a button

```html
<button id="myBtn" class="button">Click Me 1</button>
```

and in your `<script>` section after you import `confirmation.js`,

```js
confirmModal = confirmInit("myModal") // init the confirm modal here
addConfirmButton(confirmModal, "myBtn") // add button trigger here

document.addEventListener('confirm.onConfirm', function (event) {
    const eventButton = document.getElementById(event.detail.btnId)
    if (event.detail.status) {
        // user clicked on yes button
        document.getElementById("result").innerHTML = `You just clicked "Yes" in ${eventButton.innerHTML}`;
    } else {
        // user clicked on yes button
        document.getElementById("result").innerHTML = `You just clicked "Cancel" in ${eventButton.innerHTML}`;
    }
});
```
