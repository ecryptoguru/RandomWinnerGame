import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  GameEnded,
  GameStarted,
  OwnershipTransferred,
  PlayerJoined
} from "../generated/RandomWinnerGame/RandomWinnerGame"

export function createGameEndedEvent(
  gameId: BigInt,
  winner: Address,
  requestId: Bytes
): GameEnded {
  let gameEndedEvent = changetype<GameEnded>(newMockEvent())

  gameEndedEvent.parameters = new Array()

  gameEndedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  gameEndedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )

  return gameEndedEvent
}

export function createGameStartedEvent(
  gameId: BigInt,
  maxPlayers: i32,
  entryFee: BigInt
): GameStarted {
  let gameStartedEvent = changetype<GameStarted>(newMockEvent())

  gameStartedEvent.parameters = new Array()

  gameStartedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  gameStartedEvent.parameters.push(
    new ethereum.EventParam(
      "maxPlayers",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxPlayers))
    )
  )
  gameStartedEvent.parameters.push(
    new ethereum.EventParam(
      "entryFee",
      ethereum.Value.fromUnsignedBigInt(entryFee)
    )
  )

  return gameStartedEvent
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

export function createPlayerJoinedEvent(
  gameId: BigInt,
  player: Address
): PlayerJoined {
  let playerJoinedEvent = changetype<PlayerJoined>(newMockEvent())

  playerJoinedEvent.parameters = new Array()

  playerJoinedEvent.parameters.push(
    new ethereum.EventParam("gameId", ethereum.Value.fromUnsignedBigInt(gameId))
  )
  playerJoinedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )

  return playerJoinedEvent
}
