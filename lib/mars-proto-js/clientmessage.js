// source: client.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.marsproto.ClientMessage');
goog.provide('proto.marsproto.ClientMessage.DataCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.marsproto.ActionResponse');

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
proto.marsproto.ClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.marsproto.ClientMessage.oneofGroups_);
};
goog.inherits(proto.marsproto.ClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.ClientMessage.displayName = 'proto.marsproto.ClientMessage';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.marsproto.ClientMessage.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.marsproto.ClientMessage.DataCase = {
  DATA_NOT_SET: 0,
  ACK: 100
};

/**
 * @return {proto.marsproto.ClientMessage.DataCase}
 */
proto.marsproto.ClientMessage.prototype.getDataCase = function() {
  return /** @type {proto.marsproto.ClientMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.marsproto.ClientMessage.oneofGroups_[0]));
};



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
proto.marsproto.ClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.ClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.ClientMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ClientMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    ack: (f = msg.getAck()) && proto.marsproto.ActionResponse.toObject(includeInstance, f)
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
 * @return {!proto.marsproto.ClientMessage}
 */
proto.marsproto.ClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.ClientMessage;
  return proto.marsproto.ClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.ClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.ClientMessage}
 */
proto.marsproto.ClientMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 100:
      var value = new proto.marsproto.ActionResponse;
      reader.readMessage(value,proto.marsproto.ActionResponse.deserializeBinaryFromReader);
      msg.setAck(value);
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
proto.marsproto.ClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.ClientMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.ClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ClientMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAck();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.marsproto.ActionResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActionResponse ack = 100;
 * @return {?proto.marsproto.ActionResponse}
 */
proto.marsproto.ClientMessage.prototype.getAck = function() {
  return /** @type{?proto.marsproto.ActionResponse} */ (
    jspb.Message.getWrapperField(this, proto.marsproto.ActionResponse, 100));
};


/**
 * @param {?proto.marsproto.ActionResponse|undefined} value
 * @return {!proto.marsproto.ClientMessage} returns this
*/
proto.marsproto.ClientMessage.prototype.setAck = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.marsproto.ClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marsproto.ClientMessage} returns this
 */
proto.marsproto.ClientMessage.prototype.clearAck = function() {
  return this.setAck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marsproto.ClientMessage.prototype.hasAck = function() {
  return jspb.Message.getField(this, 100) != null;
};

