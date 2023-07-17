import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AcceptedNFT } from "../generated/schema"
import { AcceptedNFT as AcceptedNFTEvent } from "../generated/market/market"
import { handleAcceptedNFT } from "../src/market"
import { createAcceptedNFTEvent } from "./market-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nft = Address.fromString("0x0000000000000000000000000000000000000001")
    let tokenId = BigInt.fromI32(234)
    let payToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let offerPrice = BigInt.fromI32(234)
    let offerer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let nftOwner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAcceptedNFTEvent = createAcceptedNFTEvent(
      nft,
      tokenId,
      payToken,
      offerPrice,
      offerer,
      nftOwner
    )
    handleAcceptedNFT(newAcceptedNFTEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AcceptedNFT created and stored", () => {
    assert.entityCount("AcceptedNFT", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AcceptedNFT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nft",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AcceptedNFT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AcceptedNFT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "payToken",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AcceptedNFT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "offerPrice",
      "234"
    )
    assert.fieldEquals(
      "AcceptedNFT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "offerer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AcceptedNFT",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftOwner",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
