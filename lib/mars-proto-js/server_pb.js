// source: server.proto
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

goog.exportSymbol('proto.marsproto.Acknowledge', null, global);
goog.exportSymbol('proto.marsproto.Acknowledge.AckType', null, global);
goog.exportSymbol('proto.marsproto.ActionRequest', null, global);
goog.exportSymbol('proto.marsproto.ActionRequest.MessageCase', null, global);
goog.exportSymbol('proto.marsproto.Announce', null, global);
goog.exportSymbol('proto.marsproto.Announce.Resource', null, global);
goog.exportSymbol('proto.marsproto.ReadResponse', null, global);
goog.exportSymbol('proto.marsproto.ReadResponse.MessageCase', null, global);
goog.exportSymbol('proto.marsproto.ServerMessage', null, global);
goog.exportSymbol('proto.marsproto.ServerMessage.DataCase', null, global);
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
proto.marsproto.ServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.marsproto.ServerMessage.oneofGroups_);
};
goog.inherits(proto.marsproto.ServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.ServerMessage.displayName = 'proto.marsproto.ServerMessage';
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
proto.marsproto.Acknowledge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.marsproto.Acknowledge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.Acknowledge.displayName = 'proto.marsproto.Acknowledge';
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
proto.marsproto.ActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.marsproto.ActionRequest.oneofGroups_);
};
goog.inherits(proto.marsproto.ActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.ActionRequest.displayName = 'proto.marsproto.ActionRequest';
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
proto.marsproto.ReadResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.marsproto.ReadResponse.oneofGroups_);
};
goog.inherits(proto.marsproto.ReadResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.ReadResponse.displayName = 'proto.marsproto.ReadResponse';
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
proto.marsproto.Announce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.marsproto.Announce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.marsproto.Announce.displayName = 'proto.marsproto.Announce';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.marsproto.ServerMessage.oneofGroups_ = [[100,101,102]];

/**
 * @enum {number}
 */
proto.marsproto.ServerMessage.DataCase = {
  DATA_NOT_SET: 0,
  ACK: 100,
  REQUEST: 101,
  ANNOUNCE: 102
};

/**
 * @return {proto.marsproto.ServerMessage.DataCase}
 */
proto.marsproto.ServerMessage.prototype.getDataCase = function() {
  return /** @type {proto.marsproto.ServerMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.marsproto.ServerMessage.oneofGroups_[0]));
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
proto.marsproto.ServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.ServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.ServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    ack: (f = msg.getAck()) && proto.marsproto.Acknowledge.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.marsproto.ActionRequest.toObject(includeInstance, f),
    announce: (f = msg.getAnnounce()) && proto.marsproto.Announce.toObject(includeInstance, f)
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
 * @return {!proto.marsproto.ServerMessage}
 */
proto.marsproto.ServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.ServerMessage;
  return proto.marsproto.ServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.ServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.ServerMessage}
 */
proto.marsproto.ServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 100:
      var value = new proto.marsproto.Acknowledge;
      reader.readMessage(value,proto.marsproto.Acknowledge.deserializeBinaryFromReader);
      msg.setAck(value);
      break;
    case 101:
      var value = new proto.marsproto.ActionRequest;
      reader.readMessage(value,proto.marsproto.ActionRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 102:
      var value = new proto.marsproto.Announce;
      reader.readMessage(value,proto.marsproto.Announce.deserializeBinaryFromReader);
      msg.setAnnounce(value);
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
proto.marsproto.ServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.ServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.ServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAck();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.marsproto.Acknowledge.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto.marsproto.ActionRequest.serializeBinaryToWriter
    );
  }
  f = message.getAnnounce();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto.marsproto.Announce.serializeBinaryToWriter
    );
  }
};


/**
 * optional Acknowledge ack = 100;
 * @return {?proto.marsproto.Acknowledge}
 */
proto.marsproto.ServerMessage.prototype.getAck = function() {
  return /** @type{?proto.marsproto.Acknowledge} */ (
    jspb.Message.getWrapperField(this, proto.marsproto.Acknowledge, 100));
};


/**
 * @param {?proto.marsproto.Acknowledge|undefined} value
 * @return {!proto.marsproto.ServerMessage} returns this
*/
proto.marsproto.ServerMessage.prototype.setAck = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.marsproto.ServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marsproto.ServerMessage} returns this
 */
proto.marsproto.ServerMessage.prototype.clearAck = function() {
  return this.setAck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marsproto.ServerMessage.prototype.hasAck = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional ActionRequest request = 101;
 * @return {?proto.marsproto.ActionRequest}
 */
proto.marsproto.ServerMessage.prototype.getRequest = function() {
  return /** @type{?proto.marsproto.ActionRequest} */ (
    jspb.Message.getWrapperField(this, proto.marsproto.ActionRequest, 101));
};


/**
 * @param {?proto.marsproto.ActionRequest|undefined} value
 * @return {!proto.marsproto.ServerMessage} returns this
*/
proto.marsproto.ServerMessage.prototype.setRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.marsproto.ServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marsproto.ServerMessage} returns this
 */
proto.marsproto.ServerMessage.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marsproto.ServerMessage.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional Announce announce = 102;
 * @return {?proto.marsproto.Announce}
 */
proto.marsproto.ServerMessage.prototype.getAnnounce = function() {
  return /** @type{?proto.marsproto.Announce} */ (
    jspb.Message.getWrapperField(this, proto.marsproto.Announce, 102));
};


/**
 * @param {?proto.marsproto.Announce|undefined} value
 * @return {!proto.marsproto.ServerMessage} returns this
*/
proto.marsproto.ServerMessage.prototype.setAnnounce = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.marsproto.ServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.marsproto.ServerMessage} returns this
 */
proto.marsproto.ServerMessage.prototype.clearAnnounce = function() {
  return this.setAnnounce(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marsproto.ServerMessage.prototype.hasAnnounce = function() {
  return jspb.Message.getField(this, 102) != null;
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
proto.marsproto.Acknowledge.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.Acknowledge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.Acknowledge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.Acknowledge.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ack: jspb.Message.getFieldWithDefault(msg, 100, 0),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.marsproto.Acknowledge}
 */
proto.marsproto.Acknowledge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.Acknowledge;
  return proto.marsproto.Acknowledge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.Acknowledge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.Acknowledge}
 */
proto.marsproto.Acknowledge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayer(value);
      break;
    case 100:
      var value = /** @type {!proto.marsproto.Acknowledge.AckType} */ (reader.readEnum());
      msg.setAck(value);
      break;
    case 101:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.marsproto.Acknowledge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.Acknowledge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.Acknowledge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.Acknowledge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAck();
  if (f !== 0.0) {
    writer.writeEnum(
      100,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(101, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * @enum {number}
 */
proto.marsproto.Acknowledge.AckType = {
  ACCEPTED: 0,
  RETRY: 1,
  REJECTED: 2
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.marsproto.Acknowledge.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.Acknowledge} returns this
 */
proto.marsproto.Acknowledge.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 player = 2;
 * @return {number}
 */
proto.marsproto.Acknowledge.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.Acknowledge} returns this
 */
proto.marsproto.Acknowledge.prototype.setPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional AckType ack = 100;
 * @return {!proto.marsproto.Acknowledge.AckType}
 */
proto.marsproto.Acknowledge.prototype.getAck = function() {
  return /** @type {!proto.marsproto.Acknowledge.AckType} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {!proto.marsproto.Acknowledge.AckType} value
 * @return {!proto.marsproto.Acknowledge} returns this
 */
proto.marsproto.Acknowledge.prototype.setAck = function(value) {
  return jspb.Message.setProto3EnumField(this, 100, value);
};


/**
 * map<string, string> params = 101;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.marsproto.Acknowledge.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 101, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.marsproto.Acknowledge} returns this
 */
proto.marsproto.Acknowledge.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.marsproto.ActionRequest.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.marsproto.ActionRequest.MessageCase = {
  MESSAGE_NOT_SET: 0,
  VALUE: 100
};

/**
 * @return {proto.marsproto.ActionRequest.MessageCase}
 */
proto.marsproto.ActionRequest.prototype.getMessageCase = function() {
  return /** @type {proto.marsproto.ActionRequest.MessageCase} */(jspb.Message.computeOneofCase(this, proto.marsproto.ActionRequest.oneofGroups_[0]));
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
proto.marsproto.ActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.ActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.ActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 100, 0)
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
 * @return {!proto.marsproto.ActionRequest}
 */
proto.marsproto.ActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.ActionRequest;
  return proto.marsproto.ActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.ActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.ActionRequest}
 */
proto.marsproto.ActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayer(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.marsproto.ActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.ActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.ActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 100));
  if (f != null) {
    writer.writeInt64(
      100,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.marsproto.ActionRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.ActionRequest} returns this
 */
proto.marsproto.ActionRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 player = 2;
 * @return {number}
 */
proto.marsproto.ActionRequest.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.ActionRequest} returns this
 */
proto.marsproto.ActionRequest.prototype.setPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 value = 100;
 * @return {number}
 */
proto.marsproto.ActionRequest.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.ActionRequest} returns this
 */
proto.marsproto.ActionRequest.prototype.setValue = function(value) {
  return jspb.Message.setOneofField(this, 100, proto.marsproto.ActionRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.marsproto.ActionRequest} returns this
 */
proto.marsproto.ActionRequest.prototype.clearValue = function() {
  return jspb.Message.setOneofField(this, 100, proto.marsproto.ActionRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marsproto.ActionRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 100) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.marsproto.ReadResponse.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.marsproto.ReadResponse.MessageCase = {
  MESSAGE_NOT_SET: 0,
  VALUE: 100
};

/**
 * @return {proto.marsproto.ReadResponse.MessageCase}
 */
proto.marsproto.ReadResponse.prototype.getMessageCase = function() {
  return /** @type {proto.marsproto.ReadResponse.MessageCase} */(jspb.Message.computeOneofCase(this, proto.marsproto.ReadResponse.oneofGroups_[0]));
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
proto.marsproto.ReadResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.ReadResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.ReadResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ReadResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    player: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 100, 0)
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
 * @return {!proto.marsproto.ReadResponse}
 */
proto.marsproto.ReadResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.ReadResponse;
  return proto.marsproto.ReadResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.ReadResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.ReadResponse}
 */
proto.marsproto.ReadResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlayer(value);
      break;
    case 100:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
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
proto.marsproto.ReadResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.ReadResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.ReadResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.ReadResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPlayer();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 100));
  if (f != null) {
    writer.writeInt64(
      100,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.marsproto.ReadResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.ReadResponse} returns this
 */
proto.marsproto.ReadResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 player = 2;
 * @return {number}
 */
proto.marsproto.ReadResponse.prototype.getPlayer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.ReadResponse} returns this
 */
proto.marsproto.ReadResponse.prototype.setPlayer = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 value = 100;
 * @return {number}
 */
proto.marsproto.ReadResponse.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.ReadResponse} returns this
 */
proto.marsproto.ReadResponse.prototype.setValue = function(value) {
  return jspb.Message.setOneofField(this, 100, proto.marsproto.ReadResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.marsproto.ReadResponse} returns this
 */
proto.marsproto.ReadResponse.prototype.clearValue = function() {
  return jspb.Message.setOneofField(this, 100, proto.marsproto.ReadResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.marsproto.ReadResponse.prototype.hasValue = function() {
  return jspb.Message.getField(this, 100) != null;
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
proto.marsproto.Announce.prototype.toObject = function(opt_includeInstance) {
  return proto.marsproto.Announce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.marsproto.Announce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.Announce.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    target: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resource: jspb.Message.getFieldWithDefault(msg, 3, 0),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.marsproto.Announce}
 */
proto.marsproto.Announce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.marsproto.Announce;
  return proto.marsproto.Announce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.marsproto.Announce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.marsproto.Announce}
 */
proto.marsproto.Announce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTarget(value);
      break;
    case 3:
      var value = /** @type {!proto.marsproto.Announce.Resource} */ (reader.readEnum());
      msg.setResource(value);
      break;
    case 4:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.marsproto.Announce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.marsproto.Announce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.marsproto.Announce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.marsproto.Announce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getResource();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * @enum {number}
 */
proto.marsproto.Announce.Resource = {
  NO_ACTION: 0,
  START_GAME: 1
};

/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.marsproto.Announce.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.Announce} returns this
 */
proto.marsproto.Announce.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 target = 2;
 * @return {number}
 */
proto.marsproto.Announce.prototype.getTarget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.marsproto.Announce} returns this
 */
proto.marsproto.Announce.prototype.setTarget = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Resource resource = 3;
 * @return {!proto.marsproto.Announce.Resource}
 */
proto.marsproto.Announce.prototype.getResource = function() {
  return /** @type {!proto.marsproto.Announce.Resource} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.marsproto.Announce.Resource} value
 * @return {!proto.marsproto.Announce} returns this
 */
proto.marsproto.Announce.prototype.setResource = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * map<string, string> params = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.marsproto.Announce.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.marsproto.Announce} returns this
 */
proto.marsproto.Announce.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;};


goog.object.extend(exports, proto.marsproto);