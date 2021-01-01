// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.13.0
// source: server.proto

package marsproto

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Acknowledge_AckType int32

const (
	Acknowledge_Accepted Acknowledge_AckType = 0
	Acknowledge_Retry    Acknowledge_AckType = 1
	Acknowledge_Rejected Acknowledge_AckType = 2
)

// Enum value maps for Acknowledge_AckType.
var (
	Acknowledge_AckType_name = map[int32]string{
		0: "Accepted",
		1: "Retry",
		2: "Rejected",
	}
	Acknowledge_AckType_value = map[string]int32{
		"Accepted": 0,
		"Retry":    1,
		"Rejected": 2,
	}
)

func (x Acknowledge_AckType) Enum() *Acknowledge_AckType {
	p := new(Acknowledge_AckType)
	*p = x
	return p
}

func (x Acknowledge_AckType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Acknowledge_AckType) Descriptor() protoreflect.EnumDescriptor {
	return file_server_proto_enumTypes[0].Descriptor()
}

func (Acknowledge_AckType) Type() protoreflect.EnumType {
	return &file_server_proto_enumTypes[0]
}

func (x Acknowledge_AckType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Acknowledge_AckType.Descriptor instead.
func (Acknowledge_AckType) EnumDescriptor() ([]byte, []int) {
	return file_server_proto_rawDescGZIP(), []int{1, 0}
}

type ServerMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Data:
	//	*ServerMessage_Ack
	//	*ServerMessage_Request
	Data isServerMessage_Data `protobuf_oneof:"data"`
}

func (x *ServerMessage) Reset() {
	*x = ServerMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ServerMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ServerMessage) ProtoMessage() {}

func (x *ServerMessage) ProtoReflect() protoreflect.Message {
	mi := &file_server_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ServerMessage.ProtoReflect.Descriptor instead.
func (*ServerMessage) Descriptor() ([]byte, []int) {
	return file_server_proto_rawDescGZIP(), []int{0}
}

func (m *ServerMessage) GetData() isServerMessage_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (x *ServerMessage) GetAck() *Acknowledge {
	if x, ok := x.GetData().(*ServerMessage_Ack); ok {
		return x.Ack
	}
	return nil
}

func (x *ServerMessage) GetRequest() *ActionRequest {
	if x, ok := x.GetData().(*ServerMessage_Request); ok {
		return x.Request
	}
	return nil
}

type isServerMessage_Data interface {
	isServerMessage_Data()
}

type ServerMessage_Ack struct {
	Ack *Acknowledge `protobuf:"bytes,100,opt,name=ack,proto3,oneof"`
}

type ServerMessage_Request struct {
	Request *ActionRequest `protobuf:"bytes,101,opt,name=request,proto3,oneof"`
}

func (*ServerMessage_Ack) isServerMessage_Data() {}

func (*ServerMessage_Request) isServerMessage_Data() {}

type Acknowledge struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     int64               `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Player int64               `protobuf:"varint,2,opt,name=player,proto3" json:"player,omitempty"`
	Ack    Acknowledge_AckType `protobuf:"varint,100,opt,name=ack,proto3,enum=marsproto.Acknowledge_AckType" json:"ack,omitempty"`
	Params map[string]string   `protobuf:"bytes,101,rep,name=params,proto3" json:"params,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Acknowledge) Reset() {
	*x = Acknowledge{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Acknowledge) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Acknowledge) ProtoMessage() {}

func (x *Acknowledge) ProtoReflect() protoreflect.Message {
	mi := &file_server_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Acknowledge.ProtoReflect.Descriptor instead.
func (*Acknowledge) Descriptor() ([]byte, []int) {
	return file_server_proto_rawDescGZIP(), []int{1}
}

func (x *Acknowledge) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Acknowledge) GetPlayer() int64 {
	if x != nil {
		return x.Player
	}
	return 0
}

func (x *Acknowledge) GetAck() Acknowledge_AckType {
	if x != nil {
		return x.Ack
	}
	return Acknowledge_Accepted
}

func (x *Acknowledge) GetParams() map[string]string {
	if x != nil {
		return x.Params
	}
	return nil
}

type ActionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Player int64  `protobuf:"varint,2,opt,name=player,proto3" json:"player,omitempty"`
	Action string `protobuf:"bytes,3,opt,name=action,proto3" json:"action,omitempty"`
	// Types that are assignable to Message:
	//	*ActionRequest_Value
	Message isActionRequest_Message `protobuf_oneof:"message"`
}

func (x *ActionRequest) Reset() {
	*x = ActionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ActionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ActionRequest) ProtoMessage() {}

func (x *ActionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_server_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ActionRequest.ProtoReflect.Descriptor instead.
func (*ActionRequest) Descriptor() ([]byte, []int) {
	return file_server_proto_rawDescGZIP(), []int{2}
}

func (x *ActionRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ActionRequest) GetPlayer() int64 {
	if x != nil {
		return x.Player
	}
	return 0
}

func (x *ActionRequest) GetAction() string {
	if x != nil {
		return x.Action
	}
	return ""
}

func (m *ActionRequest) GetMessage() isActionRequest_Message {
	if m != nil {
		return m.Message
	}
	return nil
}

func (x *ActionRequest) GetValue() int64 {
	if x, ok := x.GetMessage().(*ActionRequest_Value); ok {
		return x.Value
	}
	return 0
}

type isActionRequest_Message interface {
	isActionRequest_Message()
}

type ActionRequest_Value struct {
	Value int64 `protobuf:"varint,100,opt,name=value,proto3,oneof"`
}

func (*ActionRequest_Value) isActionRequest_Message() {}

type ReadResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id     int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Player int64 `protobuf:"varint,2,opt,name=player,proto3" json:"player,omitempty"`
	// Types that are assignable to Message:
	//	*ReadResponse_Value
	Message isReadResponse_Message `protobuf_oneof:"message"`
}

func (x *ReadResponse) Reset() {
	*x = ReadResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadResponse) ProtoMessage() {}

func (x *ReadResponse) ProtoReflect() protoreflect.Message {
	mi := &file_server_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadResponse.ProtoReflect.Descriptor instead.
func (*ReadResponse) Descriptor() ([]byte, []int) {
	return file_server_proto_rawDescGZIP(), []int{3}
}

func (x *ReadResponse) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ReadResponse) GetPlayer() int64 {
	if x != nil {
		return x.Player
	}
	return 0
}

func (m *ReadResponse) GetMessage() isReadResponse_Message {
	if m != nil {
		return m.Message
	}
	return nil
}

func (x *ReadResponse) GetValue() int64 {
	if x, ok := x.GetMessage().(*ReadResponse_Value); ok {
		return x.Value
	}
	return 0
}

type isReadResponse_Message interface {
	isReadResponse_Message()
}

type ReadResponse_Value struct {
	Value int64 `protobuf:"varint,100,opt,name=value,proto3,oneof"`
}

func (*ReadResponse_Value) isReadResponse_Message() {}

type Announce struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       int64             `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Target   int64             `protobuf:"varint,2,opt,name=target,proto3" json:"target,omitempty"`
	Resource string            `protobuf:"bytes,3,opt,name=resource,proto3" json:"resource,omitempty"`
	Params   map[string]string `protobuf:"bytes,4,rep,name=params,proto3" json:"params,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Announce) Reset() {
	*x = Announce{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Announce) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Announce) ProtoMessage() {}

func (x *Announce) ProtoReflect() protoreflect.Message {
	mi := &file_server_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Announce.ProtoReflect.Descriptor instead.
func (*Announce) Descriptor() ([]byte, []int) {
	return file_server_proto_rawDescGZIP(), []int{4}
}

func (x *Announce) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Announce) GetTarget() int64 {
	if x != nil {
		return x.Target
	}
	return 0
}

func (x *Announce) GetResource() string {
	if x != nil {
		return x.Resource
	}
	return ""
}

func (x *Announce) GetParams() map[string]string {
	if x != nil {
		return x.Params
	}
	return nil
}

var File_server_proto protoreflect.FileDescriptor

var file_server_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09,
	0x6d, 0x61, 0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x79, 0x0a, 0x0d, 0x53, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x2a, 0x0a, 0x03, 0x61, 0x63,
	0x6b, 0x18, 0x64, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x63, 0x6b, 0x6e, 0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x48,
	0x00, 0x52, 0x03, 0x61, 0x63, 0x6b, 0x12, 0x34, 0x0a, 0x07, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x18, 0x65, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x48, 0x00, 0x52, 0x07, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x42, 0x06, 0x0a, 0x04,
	0x64, 0x61, 0x74, 0x61, 0x22, 0x90, 0x02, 0x0a, 0x0b, 0x41, 0x63, 0x6b, 0x6e, 0x6f, 0x77, 0x6c,
	0x65, 0x64, 0x67, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x12, 0x30, 0x0a, 0x03,
	0x61, 0x63, 0x6b, 0x18, 0x64, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x6d, 0x61, 0x72, 0x73,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x63, 0x6b, 0x6e, 0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67,
	0x65, 0x2e, 0x41, 0x63, 0x6b, 0x54, 0x79, 0x70, 0x65, 0x52, 0x03, 0x61, 0x63, 0x6b, 0x12, 0x3a,
	0x0a, 0x06, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x18, 0x65, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x22,
	0x2e, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x63, 0x6b, 0x6e, 0x6f,
	0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x52, 0x06, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x1a, 0x39, 0x0a, 0x0b, 0x50, 0x61,
	0x72, 0x61, 0x6d, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x30, 0x0a, 0x07, 0x41, 0x63, 0x6b, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x0c, 0x0a, 0x08, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x10, 0x00, 0x12, 0x09,
	0x0a, 0x05, 0x52, 0x65, 0x74, 0x72, 0x79, 0x10, 0x01, 0x12, 0x0c, 0x0a, 0x08, 0x52, 0x65, 0x6a,
	0x65, 0x63, 0x74, 0x65, 0x64, 0x10, 0x02, 0x22, 0x72, 0x0a, 0x0d, 0x41, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x70, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72,
	0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x64, 0x20, 0x01, 0x28, 0x03, 0x48, 0x00, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x42, 0x09, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x59, 0x0a, 0x0c, 0x52,
	0x65, 0x61, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x70,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x70, 0x6c, 0x61,
	0x79, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x64, 0x20, 0x01,
	0x28, 0x03, 0x48, 0x00, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x42, 0x09, 0x0a, 0x07, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0xc2, 0x01, 0x0a, 0x08, 0x41, 0x6e, 0x6e, 0x6f, 0x75,
	0x6e, 0x63, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x06, 0x74, 0x61, 0x72, 0x67, 0x65, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x72,
	0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x72,
	0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x37, 0x0a, 0x06, 0x70, 0x61, 0x72, 0x61, 0x6d,
	0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x6e, 0x6e, 0x6f, 0x75, 0x6e, 0x63, 0x65, 0x2e, 0x50, 0x61, 0x72,
	0x61, 0x6d, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x73,
	0x1a, 0x39, 0x0a, 0x0b, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12,
	0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x0d, 0x5a, 0x0b, 0x2e,
	0x3b, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_server_proto_rawDescOnce sync.Once
	file_server_proto_rawDescData = file_server_proto_rawDesc
)

func file_server_proto_rawDescGZIP() []byte {
	file_server_proto_rawDescOnce.Do(func() {
		file_server_proto_rawDescData = protoimpl.X.CompressGZIP(file_server_proto_rawDescData)
	})
	return file_server_proto_rawDescData
}

var file_server_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_server_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_server_proto_goTypes = []interface{}{
	(Acknowledge_AckType)(0), // 0: marsproto.Acknowledge.AckType
	(*ServerMessage)(nil),    // 1: marsproto.ServerMessage
	(*Acknowledge)(nil),      // 2: marsproto.Acknowledge
	(*ActionRequest)(nil),    // 3: marsproto.ActionRequest
	(*ReadResponse)(nil),     // 4: marsproto.ReadResponse
	(*Announce)(nil),         // 5: marsproto.Announce
	nil,                      // 6: marsproto.Acknowledge.ParamsEntry
	nil,                      // 7: marsproto.Announce.ParamsEntry
}
var file_server_proto_depIdxs = []int32{
	2, // 0: marsproto.ServerMessage.ack:type_name -> marsproto.Acknowledge
	3, // 1: marsproto.ServerMessage.request:type_name -> marsproto.ActionRequest
	0, // 2: marsproto.Acknowledge.ack:type_name -> marsproto.Acknowledge.AckType
	6, // 3: marsproto.Acknowledge.params:type_name -> marsproto.Acknowledge.ParamsEntry
	7, // 4: marsproto.Announce.params:type_name -> marsproto.Announce.ParamsEntry
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_server_proto_init() }
func file_server_proto_init() {
	if File_server_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_server_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ServerMessage); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_server_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Acknowledge); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_server_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ActionRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_server_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_server_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Announce); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_server_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*ServerMessage_Ack)(nil),
		(*ServerMessage_Request)(nil),
	}
	file_server_proto_msgTypes[2].OneofWrappers = []interface{}{
		(*ActionRequest_Value)(nil),
	}
	file_server_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*ReadResponse_Value)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_server_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_server_proto_goTypes,
		DependencyIndexes: file_server_proto_depIdxs,
		EnumInfos:         file_server_proto_enumTypes,
		MessageInfos:      file_server_proto_msgTypes,
	}.Build()
	File_server_proto = out.File
	file_server_proto_rawDesc = nil
	file_server_proto_goTypes = nil
	file_server_proto_depIdxs = nil
}
