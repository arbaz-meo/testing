import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AcceptedNFT,
  BoughtNFT,
  CanceledOfferredNFT,
  CreatedAuction,
  ListedNFT,
  OfferredNFT,
  OwnershipTransferred,
  PlacedBid,
  ResultedAuction
} from "../generated/market/market"

export function createAcceptedNFTEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  offerPrice: BigInt,
  offerer: Address,
  nftOwner: Address
): AcceptedNFT {
  let acceptedNftEvent = changetype<AcceptedNFT>(newMockEvent())

  acceptedNftEvent.parameters = new Array()

  acceptedNftEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  acceptedNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  acceptedNftEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  acceptedNftEvent.parameters.push(
    new ethereum.EventParam(
      "offerPrice",
      ethereum.Value.fromUnsignedBigInt(offerPrice)
    )
  )
  acceptedNftEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )
  acceptedNftEvent.parameters.push(
    new ethereum.EventParam("nftOwner", ethereum.Value.fromAddress(nftOwner))
  )

  return acceptedNftEvent
}

export function createBoughtNFTEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  price: BigInt,
  seller: Address,
  buyer: Address
): BoughtNFT {
  let boughtNftEvent = changetype<BoughtNFT>(newMockEvent())

  boughtNftEvent.parameters = new Array()

  boughtNftEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  boughtNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  boughtNftEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  boughtNftEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  boughtNftEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  boughtNftEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return boughtNftEvent
}

export function createCanceledOfferredNFTEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  offerPrice: BigInt,
  offerer: Address
): CanceledOfferredNFT {
  let canceledOfferredNftEvent = changetype<CanceledOfferredNFT>(newMockEvent())

  canceledOfferredNftEvent.parameters = new Array()

  canceledOfferredNftEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  canceledOfferredNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  canceledOfferredNftEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  canceledOfferredNftEvent.parameters.push(
    new ethereum.EventParam(
      "offerPrice",
      ethereum.Value.fromUnsignedBigInt(offerPrice)
    )
  )
  canceledOfferredNftEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )

  return canceledOfferredNftEvent
}

export function createCreatedAuctionEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  price: BigInt,
  minBid: BigInt,
  startTime: BigInt,
  endTime: BigInt,
  creator: Address
): CreatedAuction {
  let createdAuctionEvent = changetype<CreatedAuction>(newMockEvent())

  createdAuctionEvent.parameters = new Array()

  createdAuctionEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam("minBid", ethereum.Value.fromUnsignedBigInt(minBid))
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  createdAuctionEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return createdAuctionEvent
}

export function createListedNFTEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  price: BigInt,
  seller: Address
): ListedNFT {
  let listedNftEvent = changetype<ListedNFT>(newMockEvent())

  listedNftEvent.parameters = new Array()

  listedNftEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  listedNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listedNftEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  listedNftEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  listedNftEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return listedNftEvent
}

export function createOfferredNFTEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  offerPrice: BigInt,
  offerer: Address
): OfferredNFT {
  let offerredNftEvent = changetype<OfferredNFT>(newMockEvent())

  offerredNftEvent.parameters = new Array()

  offerredNftEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  offerredNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerredNftEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  offerredNftEvent.parameters.push(
    new ethereum.EventParam(
      "offerPrice",
      ethereum.Value.fromUnsignedBigInt(offerPrice)
    )
  )
  offerredNftEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )

  return offerredNftEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPlacedBidEvent(
  nft: Address,
  tokenId: BigInt,
  payToken: Address,
  bidPrice: BigInt,
  bidder: Address
): PlacedBid {
  let placedBidEvent = changetype<PlacedBid>(newMockEvent())

  placedBidEvent.parameters = new Array()

  placedBidEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam("payToken", ethereum.Value.fromAddress(payToken))
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam(
      "bidPrice",
      ethereum.Value.fromUnsignedBigInt(bidPrice)
    )
  )
  placedBidEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )

  return placedBidEvent
}

export function createResultedAuctionEvent(
  nft: Address,
  tokenId: BigInt,
  creator: Address,
  winner: Address,
  price: BigInt,
  caller: Address
): ResultedAuction {
  let resultedAuctionEvent = changetype<ResultedAuction>(newMockEvent())

  resultedAuctionEvent.parameters = new Array()

  resultedAuctionEvent.parameters.push(
    new ethereum.EventParam("nft", ethereum.Value.fromAddress(nft))
  )
  resultedAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  resultedAuctionEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  resultedAuctionEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  resultedAuctionEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  resultedAuctionEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return resultedAuctionEvent
}
