'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
/* eslint-disable */
const long_1 = __importDefault(require('long'));
const minimal_1 = __importDefault(require('protobufjs/minimal'));
const gov_1 = require('../../../cosmos/gov/v1beta1/gov');
const pagination_1 = require('../../../cosmos/base/query/v1beta1/pagination');
exports.protobufPackage = 'cosmos.gov.v1beta1';
const baseQueryProposalRequest = { proposalId: long_1.default.UZERO };
exports.QueryProposalRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryProposalRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryProposalRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = long_1.default.fromString(object.proposalId);
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryProposalRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    return message;
  },
};
const baseQueryProposalResponse = {};
exports.QueryProposalResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.proposal !== undefined) {
      gov_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryProposalResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = gov_1.Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryProposalResponse);
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = gov_1.Proposal.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal ? gov_1.Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryProposalResponse);
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = gov_1.Proposal.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },
};
const baseQueryProposalsRequest = {
  proposalStatus: 0,
  voter: '',
  depositor: '',
};
exports.QueryProposalsRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== '') {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryProposalsRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryProposalsRequest);
    if (object.proposalStatus !== undefined && object.proposalStatus !== null) {
      message.proposalStatus = gov_1.proposalStatusFromJSON(object.proposalStatus);
    } else {
      message.proposalStatus = 0;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = '';
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = '';
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalStatus !== undefined && (obj.proposalStatus = gov_1.proposalStatusToJSON(message.proposalStatus));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryProposalsRequest);
    if (object.proposalStatus !== undefined && object.proposalStatus !== null) {
      message.proposalStatus = object.proposalStatus;
    } else {
      message.proposalStatus = 0;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = '';
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = '';
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryProposalsResponse = {};
exports.QueryProposalsResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    for (const v of message.proposals) {
      gov_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryProposalsResponse);
    message.proposals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryProposalsResponse);
    message.proposals = [];
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(gov_1.Proposal.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? gov_1.Proposal.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryProposalsResponse);
    message.proposals = [];
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(gov_1.Proposal.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryVoteRequest = { proposalId: long_1.default.UZERO, voter: '' };
exports.QueryVoteRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryVoteRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryVoteRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = long_1.default.fromString(object.proposalId);
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = '';
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryVoteRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = '';
    }
    return message;
  },
};
const baseQueryVoteResponse = {};
exports.QueryVoteResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.vote !== undefined) {
      gov_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryVoteResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = gov_1.Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryVoteResponse);
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = gov_1.Vote.fromJSON(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.vote !== undefined && (obj.vote = message.vote ? gov_1.Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryVoteResponse);
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = gov_1.Vote.fromPartial(object.vote);
    } else {
      message.vote = undefined;
    }
    return message;
  },
};
const baseQueryVotesRequest = { proposalId: long_1.default.UZERO };
exports.QueryVotesRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryVotesRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryVotesRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = long_1.default.fromString(object.proposalId);
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryVotesRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryVotesResponse = {};
exports.QueryVotesResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    for (const v of message.votes) {
      gov_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryVotesResponse);
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryVotesResponse);
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(gov_1.Vote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? gov_1.Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryVotesResponse);
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(gov_1.Vote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryParamsRequest = { paramsType: '' };
exports.QueryParamsRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.paramsType !== '') {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryParamsRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryParamsRequest);
    if (object.paramsType !== undefined && object.paramsType !== null) {
      message.paramsType = String(object.paramsType);
    } else {
      message.paramsType = '';
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.paramsType !== undefined && (obj.paramsType = message.paramsType);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryParamsRequest);
    if (object.paramsType !== undefined && object.paramsType !== null) {
      message.paramsType = object.paramsType;
    } else {
      message.paramsType = '';
    }
    return message;
  },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.votingParams !== undefined) {
      gov_1.VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      gov_1.DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      gov_1.TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryParamsResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryParamsResponse);
    if (object.votingParams !== undefined && object.votingParams !== null) {
      message.votingParams = gov_1.VotingParams.fromJSON(object.votingParams);
    } else {
      message.votingParams = undefined;
    }
    if (object.depositParams !== undefined && object.depositParams !== null) {
      message.depositParams = gov_1.DepositParams.fromJSON(object.depositParams);
    } else {
      message.depositParams = undefined;
    }
    if (object.tallyParams !== undefined && object.tallyParams !== null) {
      message.tallyParams = gov_1.TallyParams.fromJSON(object.tallyParams);
    } else {
      message.tallyParams = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.votingParams !== undefined &&
      (obj.votingParams = message.votingParams ? gov_1.VotingParams.toJSON(message.votingParams) : undefined);
    message.depositParams !== undefined &&
      (obj.depositParams = message.depositParams ? gov_1.DepositParams.toJSON(message.depositParams) : undefined);
    message.tallyParams !== undefined &&
      (obj.tallyParams = message.tallyParams ? gov_1.TallyParams.toJSON(message.tallyParams) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryParamsResponse);
    if (object.votingParams !== undefined && object.votingParams !== null) {
      message.votingParams = gov_1.VotingParams.fromPartial(object.votingParams);
    } else {
      message.votingParams = undefined;
    }
    if (object.depositParams !== undefined && object.depositParams !== null) {
      message.depositParams = gov_1.DepositParams.fromPartial(object.depositParams);
    } else {
      message.depositParams = undefined;
    }
    if (object.tallyParams !== undefined && object.tallyParams !== null) {
      message.tallyParams = gov_1.TallyParams.fromPartial(object.tallyParams);
    } else {
      message.tallyParams = undefined;
    }
    return message;
  },
};
const baseQueryDepositRequest = {
  proposalId: long_1.default.UZERO,
  depositor: '',
};
exports.QueryDepositRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== '') {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryDepositRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryDepositRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = long_1.default.fromString(object.proposalId);
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = '';
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryDepositRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = '';
    }
    return message;
  },
};
const baseQueryDepositResponse = {};
exports.QueryDepositResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.deposit !== undefined) {
      gov_1.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryDepositResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = gov_1.Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryDepositResponse);
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = gov_1.Deposit.fromJSON(object.deposit);
    } else {
      message.deposit = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit ? gov_1.Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryDepositResponse);
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = gov_1.Deposit.fromPartial(object.deposit);
    } else {
      message.deposit = undefined;
    }
    return message;
  },
};
const baseQueryDepositsRequest = { proposalId: long_1.default.UZERO };
exports.QueryDepositsRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryDepositsRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryDepositsRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = long_1.default.fromString(object.proposalId);
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryDepositsRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryDepositsResponse = {};
exports.QueryDepositsResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    for (const v of message.deposits) {
      gov_1.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryDepositsResponse);
    message.deposits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryDepositsResponse);
    message.deposits = [];
    if (object.deposits !== undefined && object.deposits !== null) {
      for (const e of object.deposits) {
        message.deposits.push(gov_1.Deposit.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? gov_1.Deposit.toJSON(e) : undefined));
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryDepositsResponse);
    message.deposits = [];
    if (object.deposits !== undefined && object.deposits !== null) {
      for (const e of object.deposits) {
        message.deposits.push(gov_1.Deposit.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryTallyResultRequest = { proposalId: long_1.default.UZERO };
exports.QueryTallyResultRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryTallyResultRequest);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryTallyResultRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = long_1.default.fromString(object.proposalId);
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryTallyResultRequest);
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId;
    } else {
      message.proposalId = long_1.default.UZERO;
    }
    return message;
  },
};
const baseQueryTallyResultResponse = {};
exports.QueryTallyResultResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.tally !== undefined) {
      gov_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryTallyResultResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = gov_1.TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryTallyResultResponse);
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = gov_1.TallyResult.fromJSON(object.tally);
    } else {
      message.tally = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.tally !== undefined && (obj.tally = message.tally ? gov_1.TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryTallyResultResponse);
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = gov_1.TallyResult.fromPartial(object.tally);
    } else {
      message.tally = undefined;
    }
    return message;
  },
};
class QueryClientImpl {
  constructor(rpc) {
    this.rpc = rpc;
    this.Proposal = this.Proposal.bind(this);
    this.Proposals = this.Proposals.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Votes = this.Votes.bind(this);
    this.Params = this.Params.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Deposits = this.Deposits.bind(this);
    this.TallyResult = this.TallyResult.bind(this);
  }
  Proposal(request) {
    const data = exports.QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Proposal', data);
    return promise.then((data) => exports.QueryProposalResponse.decode(new minimal_1.default.Reader(data)));
  }
  Proposals(request) {
    const data = exports.QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Proposals', data);
    return promise.then((data) => exports.QueryProposalsResponse.decode(new minimal_1.default.Reader(data)));
  }
  Vote(request) {
    const data = exports.QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Vote', data);
    return promise.then((data) => exports.QueryVoteResponse.decode(new minimal_1.default.Reader(data)));
  }
  Votes(request) {
    const data = exports.QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Votes', data);
    return promise.then((data) => exports.QueryVotesResponse.decode(new minimal_1.default.Reader(data)));
  }
  Params(request) {
    const data = exports.QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Params', data);
    return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
  }
  Deposit(request) {
    const data = exports.QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Deposit', data);
    return promise.then((data) => exports.QueryDepositResponse.decode(new minimal_1.default.Reader(data)));
  }
  Deposits(request) {
    const data = exports.QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'Deposits', data);
    return promise.then((data) => exports.QueryDepositsResponse.decode(new minimal_1.default.Reader(data)));
  }
  TallyResult(request) {
    const data = exports.QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request('cosmos.gov.v1beta1.Query', 'TallyResult', data);
    return promise.then((data) => exports.QueryTallyResultResponse.decode(new minimal_1.default.Reader(data)));
  }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
  minimal_1.default.util.Long = long_1.default;
  minimal_1.default.configure();
}
