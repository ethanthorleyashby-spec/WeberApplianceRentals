# Weber Appliance Rentals – Customer Onboarding Site

Live site: https://weberappliancerentals.com

A customer onboarding website for Weber Appliance Rentals, my subscription washer and dryer rental business serving Northern Utah.

## What it does
- Presents rental plans, pricing, and an FAQ for new customers
- Links to full rental terms customers agree to before checkout
- Sends customers to Stripe Payment Links that start automatic recurring subscriptions ($50/month per set, $60 every 2 months per single machine)
- Gives existing renters a one-click way to switch to autopay
- Switches between English and Spanish (edit Spanish wording in `i18n.js`)

## How I built it
I built this with AI-assisted development: I used AI to generate and debug code, while I defined the requirements, tested the sign-up and payment flows, and deployed the site on Netlify.

## Why I built it
I was collecting rent through several different apps and chasing payments manually. This site moves new and existing customers onto automatic Stripe subscriptions, so payments happen on their own instead of through Venmo, Zelle, and Square.
