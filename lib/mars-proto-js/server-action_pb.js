/* eslint-disable */
// source: server-action.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var entity_pb = require('./entity_pb.js');
goog.object.extend(proto, entity_pb);
goog.exportSymbol('proto.marsproto.DoAction', null, global);
goog.exportSymbol('proto.marsproto.SelectCorporation', null, global);
goog.exportSymbol('proto.marsproto.ShopCard', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.marsproto.SelectCorporation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.marsproto.SelectCorporation.repeatedFields_, null);
};
goog.inherits(proto.marsproto.SelectCorporation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.SelectCorporation.displayName = 'proto.marsproto.SelectCorporation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.marsproto.ShopCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.marsproto.ShopCard.repeatedFields_, null);
};
goog.inherits(proto.marsproto.ShopCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.ShopCard.displayName = 'proto.marsproto.ShopCard';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.marsproto.DoAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.marsproto.DoAction.repeatedFields_, null);
};
goog.inherits(proto.marsproto.DoAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.DoAction.displayName = 'proto.marsproto.DoAction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.marsproto.SelectCorporation.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.marsproto.SelectCorporation.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.SelectCorporation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.SelectCorporation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.SelectCorporation.toObject = function(includeInstance, msg) {
  var f, obj = {
    startingHandList: jspb.Message.toObjectList(msg.getStartingHandList(),
    entity_pb.Card.toObject, includeInstance),
    corpsList: jspb.Message.toObjectList(msg.getCorpsList(),
    entity_pb.Card.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.marsproto.SelectCorporation}
 */
proto.marsproto.SelectCorporation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.SelectCorporation;
  return proto.marsproto.SelectCorporation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.SelectCorporation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.SelectCorporation}
 */
proto.marsproto.SelectCorporation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new entity_pb.Card;
      reader.readMessage(value,entity_pb.Card.deserializeBinaryFromReader);
      msg.addStartingHand(value);
      break;
    case 2:
      var value = new entity_pb.Card;
      reader.readMessage(value,entity_pb.Card.deserializeBinaryFromReader);
      msg.addCorps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.marsproto.SelectCorporation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.SelectCorporation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.SelectCorporation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.SelectCorporation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartingHandList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      entity_pb.Card.serializeBinaryToWriter
    );
  }
  f = message.getCorpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      entity_pb.Card.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Card starting_hand = 1;
 * @return {!Array<!proto.marsproto.Card>}
 */
proto.marsproto.SelectCorporation.prototype.getStartingHandList = function() {
  return /** @type{!Array<!proto.marsproto.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, entity_pb.Card, 1));
};


/**
 * @param {!Array<!proto.marsproto.Card>} value
 * @return {!proto.marsproto.SelectCorporation} returns this
*/
proto.marsproto.SelectCorporation.prototype.setStartingHandList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.marsproto.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.marsproto.Card}
 */
proto.marsproto.SelectCorporation.prototype.addStartingHand = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.marsproto.Card, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.marsproto.SelectCorporation} returns this
 */
proto.marsproto.SelectCorporation.prototype.clearStartingHandList = function() {
  return this.setStartingHandList([]);
};


/**
 * repeated Card corps = 2;
 * @return {!Array<!proto.marsproto.Card>}
 */
proto.marsproto.SelectCorporation.prototype.getCorpsList = function() {
  return /** @type{!Array<!proto.marsproto.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, entity_pb.Card, 2));
};


/**
 * @param {!Array<!proto.marsproto.Card>} value
 * @return {!proto.marsproto.SelectCorporation} returns this
*/
proto.marsproto.SelectCorporation.prototype.setCorpsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.marsproto.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.marsproto.Card}
 */
proto.marsproto.SelectCorporation.prototype.addCorps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.marsproto.Card, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.marsproto.SelectCorporation} returns this
 */
proto.marsproto.SelectCorporation.prototype.clearCorpsList = function() {
  return this.setCorpsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.marsproto.ShopCard.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.marsproto.ShopCard.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.ShopCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.ShopCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ShopCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardsList: jspb.Message.toObjectList(msg.getCardsList(),
    entity_pb.Card.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.marsproto.ShopCard}
 */
proto.marsproto.ShopCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.ShopCard;
  return proto.marsproto.ShopCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.ShopCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.ShopCard}
 */
proto.marsproto.ShopCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new entity_pb.Card;
      reader.readMessage(value,entity_pb.Card.deserializeBinaryFromReader);
      msg.addCards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.marsproto.ShopCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.ShopCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.ShopCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ShopCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      entity_pb.Card.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Card cards = 1;
 * @return {!Array<!proto.marsproto.Card>}
 */
proto.marsproto.ShopCard.prototype.getCardsList = function() {
  return /** @type{!Array<!proto.marsproto.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, entity_pb.Card, 1));
};


/**
 * @param {!Array<!proto.marsproto.Card>} value
 * @return {!proto.marsproto.ShopCard} returns this
*/
proto.marsproto.ShopCard.prototype.setCardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.marsproto.Card=} opt_value
 * @param {number=} opt_index
 * @return {!proto.marsproto.Card}
 */
proto.marsproto.ShopCard.prototype.addCards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.marsproto.Card, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.marsproto.ShopCard} returns this
 */
proto.marsproto.ShopCard.prototype.clearCardsList = function() {
  return this.setCardsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.marsproto.DoAction.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.marsproto.DoAction.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.DoAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.DoAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.DoAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    availablecardList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    availablebasicList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.marsproto.DoAction}
 */
proto.marsproto.DoAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.DoAction;
  return proto.marsproto.DoAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.DoAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.DoAction}
 */
proto.marsproto.DoAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setAvailablecardList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setAvailablebasicList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.marsproto.DoAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.DoAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.DoAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.DoAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailablecardList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getAvailablebasicList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * repeated int64 AvailableCard = 1;
 * @return {!Array<number>}
 */
proto.marsproto.DoAction.prototype.getAvailablecardList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.marsproto.DoAction} returns this
 */
proto.marsproto.DoAction.prototype.setAvailablecardList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.marsproto.DoAction} returns this
 */
proto.marsproto.DoAction.prototype.addAvailablecard = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.marsproto.DoAction} returns this
 */
proto.marsproto.DoAction.prototype.clearAvailablecardList = function() {
  return this.setAvailablecardList([]);
};


/**
 * repeated int64 AvailableBasic = 2;
 * @return {!Array<number>}
 */
proto.marsproto.DoAction.prototype.getAvailablebasicList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.marsproto.DoAction} returns this
 */
proto.marsproto.DoAction.prototype.setAvailablebasicList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.marsproto.DoAction} returns this
 */
proto.marsproto.DoAction.prototype.addAvailablebasic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.marsproto.DoAction} returns this
 */
proto.marsproto.DoAction.prototype.clearAvailablebasicList = function() {
  return this.setAvailablebasicList([]);
};


goog.object.extend(exports, proto.marsproto);
