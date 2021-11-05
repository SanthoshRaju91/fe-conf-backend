#!/bin/sh
set -eu 

echo "\n::: Populating DB"

records=(
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
	'{"query": "https://img.fril.jp/img/411972462/m/1173443751.jpg", "nodes": 100}'
)

url="http://localhost:3000/queries"

for record in "${records[@]}"
do	
	curl -X POST ${url} -H "Content-Type: application/json" -d "${record}"
done