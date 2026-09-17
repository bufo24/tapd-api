#! /bin/bash

TAG=$1
LND_TAG=$2
BASE_TAG=${3:-$TAG}

rm -rf protos

echo "Updating protos from tapd release tag: ${TAG}"
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/rfqrpc/rfq.proto --create-dirs -o protos/rfqrpc/rfq.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${TAG}/taprpc/tapchannelrpc/tapchannel.proto --create-dirs -o protos/tapchannelrpc/tapchannel.proto

echo ""
echo "Keeping non-payment protos on tapd release tag: ${BASE_TAG}"
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${BASE_TAG}/taprpc/taprootassets.proto --create-dirs -o protos/taprootassets.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${BASE_TAG}/taprpc/assetwalletrpc/assetwallet.proto --create-dirs -o protos/assetwalletrpc/assetwallet.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${BASE_TAG}/taprpc/mintrpc/mint.proto --create-dirs -o protos/mintrpc/mint.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${BASE_TAG}/taprpc/priceoraclerpc/price_oracle.proto --create-dirs -o protos/priceoraclerpc/price_oracle.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${BASE_TAG}/taprpc/universerpc/universe.proto --create-dirs -o protos/universerpc/universe.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/${BASE_TAG}/taprpc/tapcommon.proto --create-dirs -o protos/tapcommon.proto

echo ""
echo "Updating protos from lnd release tag: ${LND_TAG}"
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${LND_TAG}/lnrpc/lightning.proto --create-dirs -o protos/lightning.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${LND_TAG}/lnrpc/routerrpc/router.proto --create-dirs -o protos/routerrpc/router.proto
