// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.13.0
// source: mars.proto

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
	return file_mars_proto_enumTypes[0].Descriptor()
}

func (Acknowledge_AckType) Type() protoreflect.EnumType {
	return &file_mars_proto_enumTypes[0]
}

func (x Acknowledge_AckType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Acknowledge_AckType.Descriptor instead.
func (Acknowledge_AckType) EnumDescriptor() ([]byte, []int) {
	return file_mars_proto_rawDescGZIP(), []int{1, 0}
}

type Object struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	// Types that are assignable to Message:
	//	*Object_Ack
	Message isObject_Message `protobuf_oneof:"Message"`
}

func (x *Object) Reset() {
	*x = Object{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mars_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Object) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Object) ProtoMessage() {}

func (x *Object) ProtoReflect() protoreflect.Message {
	mi := &file_mars_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Object.ProtoReflect.Descriptor instead.
func (*Object) Descriptor() ([]byte, []int) {
	return file_mars_proto_rawDescGZIP(), []int{0}
}

func (x *Object) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (m *Object) GetMessage() isObject_Message {
	if m != nil {
		return m.Message
	}
	return nil
}

func (x *Object) GetAck() *Acknowledge {
	if x, ok := x.GetMessage().(*Object_Ack); ok {
		return x.Ack
	}
	return nil
}

type isObject_Message interface {
	isObject_Message()
}

type Object_Ack struct {
	Ack *Acknowledge `protobuf:"bytes,100,opt,name=ack,proto3,oneof"`
}

func (*Object_Ack) isObject_Message() {}

type Acknowledge struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ack Acknowledge_AckType `protobuf:"varint,1,opt,name=ack,proto3,enum=marsproto.Acknowledge_AckType" json:"ack,omitempty"`
}

func (x *Acknowledge) Reset() {
	*x = Acknowledge{}
	if protoimpl.UnsafeEnabled {
		mi := &file_mars_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Acknowledge) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Acknowledge) ProtoMessage() {}

func (x *Acknowledge) ProtoReflect() protoreflect.Message {
	mi := &file_mars_proto_msgTypes[1]
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
	return file_mars_proto_rawDescGZIP(), []int{1}
}

func (x *Acknowledge) GetAck() Acknowledge_AckType {
	if x != nil {
		return x.Ack
	}
	return Acknowledge_Accepted
}

var File_mars_proto protoreflect.FileDescriptor

var file_mars_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x6d, 0x61, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6d, 0x61,
	0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x4f, 0x0a, 0x06, 0x4f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x2a, 0x0a, 0x03, 0x61, 0x63, 0x6b, 0x18, 0x64, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x41, 0x63, 0x6b, 0x6e, 0x6f,
	0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x48, 0x00, 0x52, 0x03, 0x61, 0x63, 0x6b, 0x42, 0x09, 0x0a,
	0x07, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x22, 0x71, 0x0a, 0x0b, 0x41, 0x63, 0x6b, 0x6e,
	0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x12, 0x30, 0x0a, 0x03, 0x61, 0x63, 0x6b, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x41, 0x63, 0x6b, 0x6e, 0x6f, 0x77, 0x6c, 0x65, 0x64, 0x67, 0x65, 0x2e, 0x41, 0x63, 0x6b,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x03, 0x61, 0x63, 0x6b, 0x22, 0x30, 0x0a, 0x07, 0x41, 0x63, 0x6b,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x0c, 0x0a, 0x08, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64,
	0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x52, 0x65, 0x74, 0x72, 0x79, 0x10, 0x01, 0x12, 0x0c, 0x0a,
	0x08, 0x52, 0x65, 0x6a, 0x65, 0x63, 0x74, 0x65, 0x64, 0x10, 0x02, 0x42, 0x0d, 0x5a, 0x0b, 0x2e,
	0x3b, 0x6d, 0x61, 0x72, 0x73, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_mars_proto_rawDescOnce sync.Once
	file_mars_proto_rawDescData = file_mars_proto_rawDesc
)

func file_mars_proto_rawDescGZIP() []byte {
	file_mars_proto_rawDescOnce.Do(func() {
		file_mars_proto_rawDescData = protoimpl.X.CompressGZIP(file_mars_proto_rawDescData)
	})
	return file_mars_proto_rawDescData
}

var file_mars_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_mars_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_mars_proto_goTypes = []interface{}{
	(Acknowledge_AckType)(0), // 0: marsproto.Acknowledge.AckType
	(*Object)(nil),           // 1: marsproto.Object
	(*Acknowledge)(nil),      // 2: marsproto.Acknowledge
}
var file_mars_proto_depIdxs = []int32{
	2, // 0: marsproto.Object.ack:type_name -> marsproto.Acknowledge
	0, // 1: marsproto.Acknowledge.ack:type_name -> marsproto.Acknowledge.AckType
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_mars_proto_init() }
func file_mars_proto_init() {
	if File_mars_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_mars_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Object); i {
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
		file_mars_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
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
	}
	file_mars_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Object_Ack)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_mars_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_mars_proto_goTypes,
		DependencyIndexes: file_mars_proto_depIdxs,
		EnumInfos:         file_mars_proto_enumTypes,
		MessageInfos:      file_mars_proto_msgTypes,
	}.Build()
	File_mars_proto = out.File
	file_mars_proto_rawDesc = nil
	file_mars_proto_goTypes = nil
	file_mars_proto_depIdxs = nil
}