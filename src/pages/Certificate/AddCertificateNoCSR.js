import React, { Component } from 'react';
import {
    Row, Col, Button, Input, Form, Radio, Icon, Select, Checkbox, Modal,
} from 'antd';

import Profile from '../../components/Profile';
import ClientAuthenticationWrapper from './ClientAuthenticationStyle';

const marginBottom = {
    marginBottom: 15,
};
const RadioGroup = Radio.Group;
const { Option } = Select;

const DemoInfo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class AddCertificateNoCSR extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            addExtendedKey: false,
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    showModalExtendedKey = () => {
        this.setState({
            addExtendedKey: true,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
            addExtendedKey: false,
        });
    }

    handleIssueCertificate = () => {
        const { history } = this.props;
        history.push('/issuing-certificate');
    }

    render() {

        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }

        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-one-third sidebar">
                        <Profile title="No CSR: Client Authentication" info={DemoInfo} />
                    </div>
                    <div className="pane">
                        <ClientAuthenticationWrapper>
                        <div className="clientAuthenticationContainer">
                            <div className="required">Required </div>
                            <Form>
                                <Row style={marginBottom}>
                                    <Col span={12}>Common Name *</Col>
                                    <Col span={12}><Input /></Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>Certificate Duration *</Col>
                                    <Col span={12}>
                                        <Input style={{ width: 150, marginRight: 10 }} />
                                        Days
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>Subject</Col>
                                    <Col span={12}>
                                        <small>litmusbox.com-US-CA-Tech-1234 </small>
                                        <Button className="editBttn">Edit</Button>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>Key Size</Col>
                                    <Col span={12}>
                                        <RadioGroup name="radiogroup" defaultValue={1}>
                                            <Radio value={1}>RSA 2048</Radio>
                                            <Radio value={2}>RSA 4096</Radio>
                                        </RadioGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="clientAuthenticationContainer">
                            <div className="required">Extensions </div>
                            <Form>
                                <Row style={marginBottom}>
                                    <Col span={12}>
                                        <strong>Authority Key Identifier</strong>
                                    </Col>
                                    <Col span={12}>
                                        <small>(OID: 2.5.29.35)</small>
                                        <Icon className="info" type="info-circle" />
                                    </Col>
                                    <Col span={24}>
                                        <small>34 e4 c1 90 2e bb 4c 3d</small>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>
                                        <strong>Subject Key Identifier</strong>
                                    </Col>
                                    <Col span={12}>
                                        <small>(OID: 2.5.29.14)</small>
                                        <Icon className="info" type="info-circle" />
                                    </Col>
                                    <Col span={24}>
                                        <small>34 e4 c1 90 2e bb 4c 3d</small>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>
                                        <strong>Basic Constraints</strong>
                                    </Col>
                                    <Col span={12}>
                                        <small>(OID: 2.5.29.35)</small>
                                        <Icon className="info" type="info-circle" />
                                    </Col>
                                    <Col span={24} style={{ marginTop: 10 }}>
                                        <small>
                                            CA
                                            <Select style={{ width: 80, marginLeft: 10 }}>
                                                <Option value="false">False</Option>
                                                <Option value="true">True</Option>
                                            </Select>
                                        </small>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>
                                        <strong>Subject Alternative Names</strong>
                                    </Col>
                                    <Col span={12}>
                                        <small>(OID: 2.5.29.35)</small>
                                        <Icon className="info" type="info-circle" />
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={12}><small>sample1.zkpki.com</small></Col>
                                            <Col span={12}><Button className="deleteBttn"><Icon style={{ fontSize: 22 }} type="close-circle" theme="filled" /></Button></Col>
                                        </Row>
                                        <Row>
                                            <Col span={12}><small>sample1.zkpki.com</small></Col>
                                            <Col span={12}><Button className="deleteBttn"><Icon style={{ fontSize: 22 }} type="close-circle" theme="filled" /></Button></Col>
                                        </Row>
                                        <Row style={{ borderColor: '#777777', borderTop: 'solid', borderWidth: 1 }}>
                                            <Col span={4} offset={20} style={{ textAlign: 'right' }}>
                                                Add SAN
                                                <Button onClick={this.showModal} className="deleteBttn">
                                                    <Icon style={{ fontSize: 22 }} type="plus-square" theme="filled" />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={12}>
                                        <strong>Key Usage</strong>
                                    </Col>
                                    <Col span={12}>
                                        <small>(OID: 2.5.29.35)</small>
                                        <Icon className="info" type="info-circle" />
                                        critical
                                    </Col>
                                    <Col span={24} style={{ marginTop: 10 }}>
                                        <Row>
                                            <Col span={12}>
                                                <Checkbox onChange={onChange}>Digital Signature</Checkbox>
                                            </Col>
                                            <Col span={12}>
                                                <Checkbox onChange={onChange}>Key Agreement</Checkbox>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={marginBottom}>
                                    <Col span={24}>
                                        <strong>Extended Key Usages</strong>
                                        <Icon className="info" type="info-circle" />
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={12}><small>Key Agreement (1.3.6.2.5.5.7.3.1)</small></Col>
                                            <Col span={12}><Button className="deleteBttn"><Icon style={{ fontSize: 22 }} type="close-circle" theme="filled" /></Button></Col>
                                        </Row>
                                        <Row style={{
                                            textAlign: 'right', borderColor: '#777777', borderTop: 'solid', borderWidth: 1,
                                        }}
                                        >
                                            <Col span={8} offset={16}>
                                                Add Extended Key
                                                <Button onClick={this.showModalExtendedKey} className="deleteBttn">
                                                    <Icon style={{ fontSize: 22 }} type="plus-square" theme="filled" />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        {/* <Button onClick={this.handleIssueCertificate} className={styles.issueCertificate}>Create Certificate</Button> */}
                        <Modal
                            title="Add SAN"
                            visible={this.state.visible}
                            footer={[
                                null, null,
                            ]}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                                <Row gutter={8}>
                                    <Col span={18}><Input /></Col>
                                    <Col span={4}><Button>Add</Button></Col>
                                </Row>
                            </Form>
                        </Modal>
                        <Modal
                            title="Add Key Usage"
                            visible={this.state.addExtendedKey}
                            footer={[
                                null, null,
                            ]}
                            onCancel={this.handleCancel}
                        >
                            <Form>
                                <Row gutter={8}>
                                    <Col span={24}>
                                        <Select>
                                            <Option value="false">Key Agreement</Option>
                                            <Option value="true">Key Agreement</Option>
                                        </Select>
                                        <h2 style={{ textAlign: 'center', marginTop: 10 }}>OR</h2>
                                        <Input placeholder="Enter OID" />
                                    </Col>
                                    <Col style={{ marginTop: 10, textAlign: 'right' }} span={24}><Button>Add</Button></Col>
                                </Row>
                            </Form>
                        </Modal>
                    </ClientAuthenticationWrapper>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCertificateNoCSR;
