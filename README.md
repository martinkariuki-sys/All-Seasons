# All Seasons Shoe Dealers

Website for All Seasons Shoe Dealers.

## Run locally

Open `index.html` in a browser, or serve this folder with:

```sh
python3 -m http.server 8000
```

The contact form opens a WhatsApp message with the customer's enquiry. To direct
messages to the shop automatically, set the `data-whatsapp-number` value on the
`<body>` element in `index.html` to the international number without `+` or
spaces (for example, `254712345678`). If it is blank, WhatsApp opens its
recipient chooser with the message prefilled.
