// source: server-action.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.marsproto.SelectCorporation');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.marsproto.Card');

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
    proto.marsproto.Card.toObject, includeInstance),
    corpsList: jspb.Message.toObjectList(msg.getCorpsList(),
    proto.marsproto.Card.toObject, includeInstance)
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
      var value = new proto.marsproto.Card;
      reader.readMessage(value,proto.marsproto.Card.deserializeBinaryFromReader);
      msg.addStartingHand(value);
      break;
    case 2:
      var value = new proto.marsproto.Card;
      reader.readMessage(value,proto.marsproto.Card.deserializeBinaryFromReader);
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
      proto.marsproto.Card.serializeBinaryToWriter
    );
  }
  f = message.getCorpsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.marsproto.Card.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Card starting_hand = 1;
 * @return {!Array<!proto.marsproto.Card>}
 */
proto.marsproto.SelectCorporation.prototype.getStartingHandList = function() {
  return /** @type{!Array<!proto.marsproto.Card>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.marsproto.Card, 1));
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
    jspb.Message.getRepeatedWrapperField(this, proto.marsproto.Card, 2));
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

