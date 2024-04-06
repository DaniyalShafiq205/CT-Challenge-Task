#!/bin/bash

composer install \
&& php artisan migrate:refresh \
&& php artisan db:seed \
&& npm i \
&& npm run dev
