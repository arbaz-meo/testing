import { Address, BigInt, bigInt } from "@graphprotocol/graph-ts"
import {
  AcceptedNFT as AcceptedNFTEvent,
  BoughtNFT as BoughtNFTEvent,
  CanceledOfferredNFT as CanceledOfferredNFTEvent,
  CreatedAuction as CreatedAuctionEvent,
  ListedNFT as ListedNFTEvent,
  OfferredNFT as OfferredNFTEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PlacedBid as PlacedBidEvent,
  ResultedAuction as ResultedAuctionEvent,
  
} from "../generated/market/market"
import {
  AcceptedNFT,
  BoughtNFT,
  CanceledOfferredNFT,
  CreatedAuction,
  ListedNFT,
  activeNFT,
  OfferredNFT,
  OwnershipTransferred,
  PlacedBid,
  ResultedAuction
} from "../generated/schema"

import { Contract } from "../generated/Contract/Contract"

/* 

creating the function to make queries from subgraph and sync data  according to our bussines logic 

if any nft listed function only show those item listed currently and ignore all other event 

if any listed bought multiple times but its shows all the evnts and not ignore any 


*/

// this function gives all the event logs of accepted nfts 
export function handleAcceptedNFT(event: AcceptedNFTEvent): void {
  let entity = new AcceptedNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.offerPrice = event.params.offerPrice
  entity.offerer = event.params.offerer
  entity.nftOwner = event.params.nftOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// this function gives all the event of nfts logs when nft bought 
// if the nft bought again then its will update the subgraph and give new metadata

export function handleBoughtNFT(event: BoughtNFTEvent): void {

  let boughtnft = BoughtNFT.load(getIdFromEventParams(event.params.tokenId, event.params.nft));
  let activenft = activeNFT.load(getIdFromEventParams(event.params.tokenId, event.params.nft));
  if(!boughtnft)
  {
    boughtnft = new BoughtNFT(getIdFromEventParams(event.params.tokenId, event.params.nft));
    
  }

  if (!activenft)
  {
    activenft = new activeNFT(getIdFromEventParams(event.params.tokenId, event.params.nft));
  }
 
  boughtnft.nft = event.params.nft
  boughtnft.tokenId = event.params.tokenId
  boughtnft.payToken = event.params.payToken
  boughtnft.price = event.params.price
  boughtnft.seller = event.params.seller
  boughtnft.buyer = event.params.buyer

  boughtnft.blockNumber = event.block.number
  boughtnft.blockTimestamp = event.block.timestamp
  boughtnft.transactionHash = event.transaction.hash

  activenft.nft = event.params.nft
  activenft.tokenId = event.params.tokenId
  activenft.payToken = event.params.payToken
  activenft.price = event.params.price
  activenft.seller = event.params.seller
  activenft.blockNumber = event.block.number
  activenft.blockTimestamp = event.block.timestamp
  activenft.transactionHash = event.transaction.hash
  activenft.isActive = false
   

  activenft.save()
  boughtnft.save()

}

// this function handling all the event log canceling the offer for  any nft 
export function handleCanceledOfferredNFT(
  event: CanceledOfferredNFTEvent
): void {
  let entity = new CanceledOfferredNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.offerPrice = event.params.offerPrice
  entity.offerer = event.params.offerer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
// this function will handle all the auction events logs if aany auction will created 
export function handleCreatedAuction(event: CreatedAuctionEvent): void {
  let entity = new CreatedAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.price = event.params.price
  entity.minBid = event.params.minBid
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
// this function handling all the listed nfts event when any nft will be listed 
// if this nft will listed again then its function will also hanlde it and will update the metadata of subgraph  with price
export function handleListedNFT(event: ListedNFTEvent): void {
  let listnft = ListedNFT.load(getIdFromEventParams(event.params.tokenId, event.params.nft));
  let activenft =activeNFT.load(getIdFromEventParams(event.params.tokenId, event.params.nft));
  if(!listnft){
    listnft = new ListedNFT(getIdFromEventParams(event.params.tokenId, event.params.nft))
  } 
  if(!activenft)
  {
    activenft = new activeNFT(getIdFromEventParams(event.params.tokenId, event.params.nft))
  }

    let token_nft = Contract.bind(event.address);

    listnft.nft = event.params.nft
    listnft.tokenId = event.params.tokenId
    listnft.payToken = event.params.payToken
    listnft.price = event.params.price
    listnft.seller = event.params.seller
    listnft.blockNumber = event.block.number
    listnft.blockTimestamp = event.block.timestamp
    listnft.transactionHash = event.transaction.hash

    activenft.nft = event.params.nft
    activenft.tokenId = event.params.tokenId
    activenft.payToken = event.params.payToken
    activenft.price = event.params.price
    activenft.seller = event.params.seller
    activenft.blockNumber = event.block.number
    activenft.blockTimestamp = event.block.timestamp
    activenft.transactionHash = event.transaction.hash
    if(event.params.tokenId)
    {
      activenft.contentURI = token_nft.tokenURI(event.params.tokenId)
    }
   
    activenft.isActive = true
    
   
   
    activenft.save()
    listnft.save()
}

// this function function handling all then event logs for offer event logs 
// all the transaction relted to offer the nft will be updated here in subgraph 
export function handleOfferredNFT(event: OfferredNFTEvent): void {
  let entity = new OfferredNFT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.offerPrice = event.params.offerPrice
  entity.offerer = event.params.offerer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
// all event of logs related to the ownership transaction for syncying data will be handle here .

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
// if any one place the bid for specific nft then this function will handle all the events related to the bid transaction 

export function handlePlacedBid(event: PlacedBidEvent): void {
  let entity = new PlacedBid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.bidPrice = event.params.bidPrice
  entity.bidder = event.params.bidder

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// this function will handle all events will related to result of nfts auction and sync the subgrah from contract accrodingly 
export function handleResultedAuction(event: ResultedAuctionEvent): void {
  let entity = new ResultedAuction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.creator = event.params.creator
  entity.winner = event.params.winner
  entity.price = event.params.price
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
// we are creating unique id for every address  so for this we are using two combitination of nft Id and the nft Address 
function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}
