if (typeof tio == "undefined") tio = {};
tio.ws = function(urlcreator, param, handler, heartbeatTimeout, reconnInterval, binaryType) {
    this.binaryType = binaryType || "arraybuffer";
    this.urlcreator = urlcreator;
    this.param = param;
    this.handler = handler;
    this.heartbeatTimeout = heartbeatTimeout;
    this.reconnInterval = reconnInterval;
    this.lastInteractionTime = function() {
        if (arguments.length == 1) this.lastInteractionTimeValue = arguments[0];
        return this.lastInteractionTimeValue
    };
    this.heartbeatSendInterval = heartbeatTimeout / 2;
    this.connect = function(isReconnect) {
        var self = this;
        var _url;
        try {
            _url = self.urlcreator.call(self.urlcreator, isReconnect)
        } catch (e) {
            error(e)
        }
        if (!_url) {
            var self = this;
            setTimeout(function() {
                var ws = self.connect(false);
                self.ws = ws
            }, self.reconnInterval);
            return
        }
        var ws = new WebSocket(_url);
        this.ws = ws;
        ws.binaryType = this.binaryType;
        ws.onopen = function(event) {
            self.handler.onopen.call(self.handler, event, ws);
            self.lastInteractionTime((new Date).getTime());
            self.pingIntervalId = setInterval(function() {
                self.ping(self)
            }, self.heartbeatSendInterval)
        };
        ws.onmessage = function(event) {
            self.handler.onmessage.call(self.handler,
                event, ws);
            self.lastInteractionTime((new Date).getTime())
        };
        ws.onclose = function(event) {
            clearInterval(self.pingIntervalId);
            try {
                self.handler.onclose.call(self.handler, event, ws)
            } catch (error) {}
            self.reconn(event)
        };
        ws.onerror = function(event) {
            self.handler.onerror.call(self.handler, event, ws)
        };
        return ws
    };
    this.reconn = function(event) {
        var self = this;
        setTimeout(function() {
            var ws = self.connect(true);
            self.ws = ws
        }, self.reconnInterval)
    };
    this.ping = function() {
        var iv = (new Date).getTime() - this.lastInteractionTime();
        if (this.heartbeatSendInterval +
            iv >= this.heartbeatTimeout) this.handler.ping(this.ws)
    };
    this.send = function(data) {
        this.ws.send(data)
    }
};

orderType = 1

put = 1 //�ϼ�
PICK = 0 //�¼�
function getOrderType(orderOpType, orderType) {
    if (orderOpType == put) {
        if (orderType = ORERTYPE_PUTKING.value)
            return ORERTYPE_PUTKING.name;
        if (ORERTYPE_PUTEND == ORERTYPE_PUTEND.value)
            return ORERTYPE_PUTEND.name;
    }
}
ORERTYPE_PUTKING: { value: 0, name; "�ϼ���..." }
ORERTYPE_PUTEND: { value: 1, name; "�ϼ����..." }

var wx_const = {
    linkcard: {
        ct: {
            "blog": "����",
            "news": "����",
            "soft": "����"
        }
    }
};



var wx_const = {
    linkcard: {
        ct: {
            "blog": "����",
            "news": "����",
            "soft": "����"
        }
    }
};
var wscommand_len = 5;
var wscommand = {
    HEARTBEAT_REQ: 1, //����
    HANDSHAKE_REQ: 2, //
    HANDSHAKE_RESP: 3,
    JOIN_GROUP_REQ: 4,
    JOIN_GROUP_RESP: 5,
    JOIN_GROUP_NTY: 6,
    LEAVE_GROUP_NTY: 7,
    P2P_CHAT_REQ: 8,
    P2P_CHAT_NTY: 9,
    GROUP_CHAT_REQ: 10,
    GROUP_CHAT_NTY: 11,
    P2P_QUERY_CHAT_RECORD_REQ: 12,
    RUN_JS_NTY: 14,
    CLOSE_PAGE: 15,
    MSG_TIP: 16,
    PAGE_ONLINE_REQ: 18,
    PAGE_ONLINE_RESP: 19,
    UPDATE_TOKEN_REQ: 20,
    UPDATE_TOKEN_RESP: 21,
    UNSEND_MSG_REQ: 22,
    UNSEND_MSG_NTY: 23,
    USER_ACTION_LOG_REQ: 24,
    P2P_ALREADY_READ_REQ: 25,
    P2P_ALREADY_READ_NTY: 26,
    P2P_RECENT_CHAT_LIST_REQ: 27,
    P2P_RECENT_CHAT_LIST_RESP: 28,
    WX_HANDSHAKE_REQ: 599,
    WX_HANDSHAKE_RESP: 600,
    WX_APPLY_FRIEND_NTF: 601,
    WX_FRIEND_CHAT_REQ: 602,
    WX_FRIEND_CHAT_NTF: 603,
    WX_QUERY_FRIEND_MSG_REQ: 604,
    WX_QUERY_FRIEND_MSG_RESP: 605,
    WX_GROUP_CHAT_REQ: 606,
    WX_GROUP_CHAT_NTF: 607,
    WX_FRIEND_ALREADY_READ_REQ: 608,
    WX_FRIEND_ALREADY_READ_NTF: 609,
    WX_GROUP_ALREADY_READ_REQ: 610,
    WX_WITHDRAW_MSG_REQ: 612,
    WX_WITHDRAW_MSG_NTF: 613,
    WX_LEAVE_GROUP_NTF: 614,
    WX_NOT_FRIEND_NTF: 615,
    xxxxx: 99999
};
var formatCommand = function(command) {
    var commandstr = command + "";
    if (commandstr.length < wscommand_len) {
        var gap = wscommand_len - commandstr.length;
        var supplystr = "";
        for (var index = 0; index < gap; index++) supplystr += "0";
        if (command < 0) commandstr = "-" + supplystr + commandstr.substring(1);
        else commandstr = supplystr + commandstr
    }
    return commandstr
};
var commandReverse = {};
for (var commandName in wscommand) {
    var commandValue = wscommand[commandName];
    commandReverse[formatCommand(commandValue)] = commandName
}
log(commandReverse);
var wshandler = function() {
    var self = this;
    this.onopen = function(event, ws) {};
    this.onmessage = function(event, ws) {
        var arrayBuffer = event.data;
        var uint8array = null;
        var firstbyte = new Uint8Array(arrayBuffer, 0, 2);
        var firstchar = (new TextDecoder("utf-8")).decode(firstbyte);
        var isZipped = false;
        var isZippedStr = "";
        if (firstchar.indexOf("x") != -1) {
            isZipped = true;
            isZippedStr = "(zipped)";
            var zipedUint8array = new Uint8Array(arrayBuffer, 2);
            uint8array = pako.ungzip(zipedUint8array)
        } else uint8array = new Uint8Array(arrayBuffer);
        var data =
            (new TextDecoder("utf-8")).decode(uint8array);
        if (!data || data.length < wscommand_len) {
            error("data wrong" + isZippedStr + ", the data length must be >= " + wscommand_len, data);
            return
        }
        var commandstr = data.substr(0, wscommand_len);
        var commandName = commandReverse[commandstr];
        if (!commandName) {
            error("commandstr is " + commandstr + isZippedStr + ", but con not find commandName");
            return
        }
        var bshandler = window[commandName];
        if (!bshandler) {
            error("can not found wx_handler, command is " + commandName + isZippedStr);
            return
        }
        var bodyStr =
            null;
        var bodyObj = null;
        if (data.length > wscommand_len) {
            bodyStr = data.substr(wscommand_len);
            log("received:" + commandName + isZippedStr + "\r\n, body string is :" + bodyStr);
            try {
                bodyObj = JSON.parse(bodyStr)
            } catch (error) {
                error("can not parse to object, commandName is " + commandName + isZippedStr + ", body string is " + bodyStr);
                return
            }
        }
        bshandler.call(bshandler, ws, event, commandName, bodyStr, bodyObj)
    };
    this.onclose = function(e, ws) {};
    this.onerror = function(e, ws) {};
    this.ping = function(ws) {
        wx.send(wscommand.HEARTBEAT_REQ, null)
    }
};
var MSG_TIP = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    if (bodyObj.code == 1) {
        tiosite_show_login(1);
        return
    }
    if (bodyObj.level == 2) layer.alert(bodyObj.msg);
    else layer.msg(bodyObj.msg)
};
var WX_APPLY_FRIEND_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    log(bodyObj.from);
    wxFriendList.applyList(4);
    if (!wxFriendList.show || wxFriendList.rightshow != 1) autioDom.play()
};
var WX_FRIEND_ALREADY_READ_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    let index = wxChatVue.chatList.findIndex(item => item.uid == bodyObj.uid && !item.groupid);
    if (index != -1) {
        wxChatVue.chatList[index].readflag2 = 1;
        wxChatVue.chatData.map(item => {
            if (item.readflag == 2) {
                item.readflag = 1;
                item.readtime = bodyObj.readtime
            }
        })
    }
};
var WX_FRIEND_CHAT_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    let wchatOn = wxChatVue.chatOn;
    let bodytouid = bodyObj.touid,
        bodyuid = bodyObj.uid;
    var isSendByMe = bodyuid == curruid;
    var fromuser = getUserInfo(bodyuid);
    var touser = getUserInfo(bodytouid);
    bodyObj.t = formatDateByTime(bodyObj.t, "yyyy-MM-dd HH:mm:ss");
    if (isSendByMe && wchatOn == bodytouid || !isSendByMe && wchatOn == bodyuid) {
        var sendtype = 2;
        if (isSendByMe) sendtype = 1;
        if (bodyObj.sendbysys == 1) sendtype = 3;
        chatMessageCt(bodyObj,
            fromuser, sendtype);
        if (isSendByMe) wxChatVue.scrollBotm();
        else {
            let botHeig = $("#chat-center li:last").offset().top;
            if (botHeig < chatSofftop + 100) wxChatVue.scrollBotm()
        }
        if (isSendByMe && wxChatVue.sendMsg) wxChatVue.sendMsg = ""
    }
    let onSend = wchatOn == bodyuid;
    let cobj = {},
        sIndex;
    if (isSendByMe) sIndex = wxChatVue.chatList.findIndex(item => item.uid == bodytouid && !item.groupid);
    else sIndex = wxChatVue.chatList.findIndex(item => item.uid == bodyuid && !item.groupid);
    if (sIndex != -1) {
        let item = wxChatVue.chatList[sIndex];
        item.ct = bodyObj.ct;
        item.readflag = bodyObj.readflag;
        item.text = bodyObj.c;
        if (isSendByMe) item.readflag2 = 2;
        else if (!isSendByMe) item.readflag2 = "";
        let notreadcount = item.notreadcount ? item.notreadcount : 0;
        if (isSendByMe && wchatOn == bodytouid || !isSendByMe && onSend) item.notreadcount = 0;
        else item.notreadcount = ++notreadcount;
        item.time = formatDateByTime(bodyObj.t, "yyyy-MM-dd HH:mm:ss")
    } else {
        cobj = {
            avatar: isSendByMe ? touser.avatar : fromuser.avatar,
            ct: bodyObj.ct,
            nick: isSendByMe ? touser.nick : fromuser.nick,
            readflag: bodyObj.readflag,
            text: bodyObj.c,
            time: formatDateByTime(bodyObj.t, "yyyy-MM-dd HH:mm:ss"),
            touid: isSendByMe ? bodytouid : bodyuid,
            uid: curruid.id
        };
        if (isSendByMe) cobj.readflag2 = 2;
        else if (!isSendByMe) cobj.readflag2 = "";
        if (!onSend) cobj.notreadcount = 1;
        wxChatVue.chatList.push(cobj)
    }
    if (!isSendByMe && onSend && bodyObj.readflag == 2) wx.send(wscommand.WX_FRIEND_ALREADY_READ_REQ, {
        "uid": wchatOn
    });
    if (!onSend && !isSendByMe) autioDom.play();
    wx.recentData(wxChatVue.chatList)
};
var WX_GROUP_CHAT_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    var isSendByMe = bodyObj.f == curruid;
    let wxgroupid = bodyObj.g;
    let wxChatOn = wxChatVue.chatOn;
    bodyObj.t = formatDateByTime(bodyObj.t, "yyyy-MM-dd HH:mm:ss");
    if (wxChatOn == wxgroupid) {
        var fromuser = getUserInfo(bodyObj.f);
        var sendtype = 2;
        if (isSendByMe) sendtype = 1;
        if (bodyObj.sendbysys == 1) sendtype = 3;
        chatMessageCt(bodyObj, fromuser, sendtype);
        if (isSendByMe) wxChatVue.scrollBotm();
        else {
            let botHeig = $("#chat-center li:last").offset().top;
            if (botHeig < chatSofftop + 100) wxChatVue.scrollBotm()
        }
        if (isSendByMe && wxChatVue.sendMsg) wxChatVue.sendMsg = ""
    }
    let groupinfo, gobj;
    let gIndex = wxChatVue.chatList.findIndex(item => item.groupid == wxgroupid);
    if (gIndex != -1) {
        let item = wxChatVue.chatList[gIndex];
        item.ct = bodyObj.ct;
        item.text = bodyObj.c;
        item.time = formatDateByTime(bodyObj.t, "yyyy-MM-dd HH:mm:ss");
        if (wxChatOn == wxgroupid) item.notreadcount = 0;
        else item.notreadcount = ++item.notreadcount
    } else {
        groupinfo = getWxGroupInfo(wxgroupid);
        gobj = {
            avatar: groupinfo.avatar,
            ct: bodyObj.ct,
            groupid: wxgroupid,
            nick: groupinfo.name,
            text: bodyObj.c,
            time: formatDateByTime(bodyObj.t, "yyyy-MM-dd HH:mm:ss"),
            uid: groupinfo.uid
        };
        wxChatVue.chatList.push(gobj);
        if (wxChatOn != wxgroupid) gobj.notreadcount = 1
    }
    if (wxChatOn == wxgroupid) wx.send(wscommand.WX_GROUP_ALREADY_READ_REQ, {
        "g": wxChatOn
    });
    else autioDom.play();
    wx.recentData(wxChatVue.chatList)
};
var WX_HANDSHAKE_RESP = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    channelContext_id = bodyObj.cid;
    if (curruser) {
        var req = {};
        info("ws���ֳɹ�����������һϵ�г�ʼ��������");
        reLoadIcon();
        wxFriendList.applyList(4)
    } else;
};
var WX_LEAVE_GROUP_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    let btype = bodyObj.type;
    let groupid = bodyObj.groupid;
    let inLeftChat = wxChatVue.chatList.findIndex(item => item.groupid == groupid);
    if (inLeftChat != -1) wxChatVue.chatList.splice(inLeftChat, 1);
    if (wxChatVue.chatOn == groupid) {
        wxChatVue.chatOn = "";
        wxChatVue.isGroupChat = false;
        wxChatVue.chatsData()
    }
};
var WX_NOT_FRIEND_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    let type = bodyObj.type;
    let bodyhtml = "";
    if (type != 2) bodyhtml = `�㻹������(��)���ѣ����ȷ��ͺ�����֤���󣬶Է�ͨ����������졣<span class="sendVerif" uid="${bodyObj.uid}">���ͺ�����֤</span>`;
    else bodyhtml = `�Է��������ĺ����б��У���Ҫ����Ϊ������<span class="sendAddFriend" uid="${bodyObj.uid}">��Ϊ����</span>`;
    wxChatVue.sendMsg = "";
    wxChatVue.chatData.push({
        type: 3,
        html: bodyhtml
    });
    wxChatVue.scrollBotm()
};
var WX_WITHDRAW_MSG_NTF = function(ws, event, commandName, bodyStr, bodyObj) {
    log("�յ���������Ϣ", commandName, bodyObj);
    let bodyuid = bodyObj.uid,
        bodyoperUid = bodyObj.operUid;
    let wdUser = getUserInfo(bodyoperUid),
        bzUser = null,
        bodyhtml = "";
    if (bodyuid == bodyoperUid) bodyhtml = `<b class="wduser_name">${wdUser.nick}</b>�������Լ�����Ϣ`;
    else {
        bzUser = getUserInfo(bodyuid);
        bodyhtml = `<b class="wduser_name">${wdUser.nick}</b>������<b class="wduser_name">${bzUser.nick}</b>����Ϣ`
    }
    let midIndex = wxChatVue.chatData.findIndex(item => item.mid == bodyObj.mid);
    wxChatVue.chatData.splice(midIndex, 1, {
        type: 3,
        html: bodyhtml,
        mid: bodyObj.mid
    });
    if (wxChatVue.chatOn != bodyObj.g) autioDom.play()
};
var ws_protocol = "wss";
var ws_server;
var ws_port;
var heartbeatTimeout = 10 * 1E3;
var reconnInterval = 10 * 1E3;
var ws_binaryType = "arraybuffer";
var wshandler = new wshandler;
var tiows;

function initWs() {
    var param = null;
    tiows = new tio.ws(function(reconn) {
        ajax.get("/im/imserver", {
            data: {},
            async: false,
            timeout: 5E3,
            success: function(resp) {
                var data = resp.data;
                ws_server = data.ip;
                ws_port = data.port;
                log("imserver", data)
            }
        });
        var queryString = "wx=1&" + sessionName + "=" + encodeURIComponent(sessionValue);
        if (tesft_tio_fdfdse) queryString = queryString + "&" + tesoegEgac + "=" + encodeURIComponent(tesft_tio_fdfdse);
        var url = ws_protocol + "://" + ws_server + ":" + ws_port + "?" + queryString;
        if (reconn) url += "&tiows_reconnect=true";
        return url
    }, param, wshandler, heartbeatTimeout, reconnInterval, ws_binaryType);
    tiows.connect()
}

function getWxGroupInfo(groupid) {
    var data = null;
    var cacheName = "groupinfo";
    data = tioCache.get(cacheName, groupid);
    if (data) return data;
    ajax.get("/wx/group/info", {
        data: {
            groupid: groupid
        },
        async: false,
        success: function(res) {
            if (res.ok) {
                data = res.data;
                tioCache.set(cacheName, groupid, res.data, {
                    exp: 5
                })
            }
        }
    });
    return data
}

function getWxGroupMember(groupid, pageNumber, nick) {
    var data = null;
    var cacheName = "groupmember";
    var key = groupid + "_" + pageNumber;
    if (nick) key += "_" + nick;
    data = tioCache.get(cacheName, key);
    if (data) return data;
    ajax.get("/wx/group/member", {
        data: {
            "groupid": groupid,
            "pageNumber": pageNumber,
            "nick": nick
        },
        async: false,
        success: function(res) {
            if (res.ok) {
                data = res.data;
                tioCache.set(cacheName, key, res.data, {
                    exp: 5 * 1
                })
            }
        }
    });
    return data
}
var wx = {
    send: function(command, bodyObj) {
        var commandstr = formatCommand(command);
        var commandname = commandReverse[commandstr];
        var str = commandstr;
        if (bodyObj) {
            str = commandstr + JSON.stringify(bodyObj);
            log(str + "str")
        }
        log("׼������ " + commandname + ":'" + str + "'");
        var uint8array = (new TextEncoder).encode(str);
        tiows.ws.send(uint8array.buffer)
    },
    recent: function() {
        ajax.get("/wx/recent", {
            async: false,
            success: function(res) {
                if (res.ok) {
                    let data = res.data;
                    if (!data) return;
                    wx.recentData(data)
                } else {
                    layer.msg(res.msg);
                    return []
                }
            }
        })
    },
    recentData: function(data) {
        data.sort(function(a,
            b) {
            if (a.time > b.time) return -1;
            else if (a.time < b.time) return 1;
            else {
                if (a.groupid && b.groupid || a.touid && b.touid)
                    if (a.id > b.id) return -1;
                    else {
                        if (a.id < b.id) return 1
                    }
                else if (a.groupid && b.touid) return 1;
                else if (a.touid && b.groupid) return -1;
                return 0
            }
        });
        wxChatVue.chatList = data;
        notReadMessage()
    }
};
let wxChatVue = null;
let chatSofftop = 0;
$(function() {
    wxChatVue = new Vue({
        el: "#wx-chat-vue",
        data() {
            return {
                chatList: [],
                show: false,
                chatOn: "",
                mesContextmenu: {
                    show: false,
                    top: 0,
                    left: 0
                },
                mesContextDom: null,
                chatpersoncard: {
                    show: false,
                    top: 0,
                    left: 0,
                    data: {},
                    isfriend: false
                },
                emojiList: emojData.emojiList,
                emojiShow: false,
                wxtips: {
                    topshow: false,
                    rightshow: false,
                    topload: false
                },
                isGroupChat: false,
                title: "",
                chatLength: 0,
                sendMsg: "",
                hasFriendsData: {},
                remarkname: ""
            }
        },
        mixins: [wxChatList, wxGroupOpera],
        methods: {
            chatScrollTop() {
                $("#chat-center").mCustomScrollbar("scrollTo",
                    0)
            },
            wxTextKey(e) {
                if (e.keyCode == 13 && e.ctrlKey) this.sendMsg += "\n";
                else if (e.keyCode == 13) this.chatSendMessage()
            },
            pasteSend(ev) {
                let _this = this;
                let dataItem = ev.clipboardData.items;
                $.each(dataItem, (i, item) => {
                    var file = item.getAsFile();
                    if (file) {
                        var reader = new FileReader;
                        reader.readAsDataURL(file);
                        reader.onload = function() {
                            let blob = dataURLtoBlob(this.result);
                            let fd = new FormData;
                            fd.append("uploadFile", blob, "wxchatimg.jpg");
                            if (_this.isGroupChat) fd.append("groupid", _this.chatOn);
                            else fd.append("touid", _this.chatOn);
                            _this.upLoadAjax("/wx/uploadimg", fd)
                        }
                    }
                })
            },
            initScrollBotm() {
                let scrollTopPx = 0;
                let _this = this;
                if ($("#chat-center li").length > 0) {
                    let topOffsetPx = $("#chat-center li:first").offset().top,
                        domOffsetPx = $("#chat-center li:last").offset().top;
                    scrollTopPx = domOffsetPx - topOffsetPx
                }
                defineScroll($("#chat-center"), scrollTopPx + "px", {
                    onTotalScrollBack: function() {
                        if (_this.chatLength < 50) return;
                        _this.wxtips.topload = true;
                        _this.chatListAjax($("#chat-center li:first").attr("mid"), "unshift")
                    }
                })
            },
            scrollBotm() {
                $("#chat-center").mCustomScrollbar("scrollTo",
                    "last", {
                        scrollInertia: 1
                    })
            },
            sendOperaTips() {
                layer.tips("��������ͼ��ֱ��ճ�����ı�����з��ͣ�", "#send-opera-tips", {
                    tips: 3
                })
            },
            uploadImg(e) {
                this.uploadCom(e, "/wx/uploadimg")
            },
            uploadVideo(e) {
                this.uploadCom(e, "/wx/uploadvideo")
            },
            uploadCom(event, url) {
                let _this = this,
                    file = event.currentTarget.files[0],
                    reader = new FileReader;
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    let blob = dataURLtoBlob(this.result);
                    let fd = new FormData;
                    fd.append("uploadFile", blob, file.name);
                    if (_this.isGroupChat) fd.append("groupid", _this.chatOn);
                    else fd.append("touid", _this.chatOn);
                    _this.upLoadAjax(url, fd);
                    event.target.value = ""
                }
            },
            upLoadAjax(url, postdata, cb) {
                ajax.post(url, {
                    data: postdata,
                    contentType: false,
                    processData: false,
                    success: function(res) {
                        if (res.ok) {
                            if (cb) cb(res)
                        } else layer.msg(res.msg)
                    }
                })
            },
            uploadDix(e) {
                let _this = this;
                file = e.currentTarget.files[0];
                if (file) {
                    let reader = new FileReader;
                    reader.readAsDataURL(file);
                    reader.onload = function(e) {
                        let blob = dataURLtoBlob(this.result);
                        let fd = new FormData;
                        fd.append("uploadFile", blob, file.name);
                        if (_this.isGroupChat) fd.append("groupid",
                            _this.chatOn);
                        else fd.append("touid", _this.chatOn);
                        _this.upLoadAjax("/wx/uploadfile", fd)
                    }
                }
            },
            chatSendMessage() {
                let sendVal = this.sendMsg;
                if (sendVal == "") {
                    layer.msg("��������������");
                    return
                }
                if (this.isGroupChat) {
                    let sendreq = {
                        c: sendVal,
                        g: this.chatOn,
                        at: []
                    };
                    wx.send(wscommand.WX_GROUP_CHAT_REQ, sendreq)
                } else {
                    let sendreq = {
                        c: sendVal,
                        to: this.chatOn
                    };
                    wx.send(wscommand.WX_FRIEND_CHAT_REQ, sendreq)
                }
            },
            chatMessageOpera(e, v) {
                if (!isSuper && v.uid != curruid) return;
                this.mesContextmenu = {
                    show: true,
                    top: e.pageY - 50 + "px",
                    left: e.clientX -
                        (document.body.scrollWidth - $(".layui-container").width()) / 2 - 300 + "px"
                };
                this.mesContextDom = e.currentTarget;
                this.disableScroll()
            },
            disableScroll() {
                $("#chat-center").mCustomScrollbar("disable")
            },
            showCard(e) {
                let uid = $(e.currentTarget).attr("uid");
                this.chatpersoncard["data"] = getUserInfo(uid);
                this.chatpersoncard.show = true;
                this.chatpersoncard.top = e.pageY - 50 + "px";
                this.chatpersoncard.left = e.pageX - (document.body.scrollWidth - $(".layui-container").width()) / 2 - 300 + "px";
                this.isFriend(uid);
                this.disableScroll()
            },
            chooseEmoji() {
                this.emojiShow =
                    true;
                this.$nextTick(() => {
                    defineScroll($("#wx-emoji-body"))
                })
            },
            appendMessage(e) {
                this.sendMsg = this.sendMsg + $(e.currentTarget).attr("alt");
                $("#chat-editor").focus()
            },
            chatTextDelete() {
                let req = {
                    mid: $(this.mesContextDom).attr("mid")
                };
                if (this.isGroupChat) req.g = this.chatOn;
                wx.send(wscommand.WX_WITHDRAW_MSG_REQ, req)
            },
            chatPersonSet() {
                this.hasFriendsData = getUserInfo(this.chatOn);
                this.friendInfo();
                layer.open({
                    title: false,
                    type: 1,
                    title: false,
                    shadeClose: false,
                    content: $("#wx-hasfriend-info"),
                    area: "400px"
                })
            },
            friendInfo() {
                let _this =
                    this;
                ajax.post("/wx/friend/friendInfo", {
                    data: {
                        uid: this.chatOn
                    },
                    async: false,
                    success: function(res) {
                        if (res.ok)
                            if (res.data) _this.remarkname = res.data.remarkname
                    }
                })
            },
            editFriendName() {
                let _this = this;
                layer.prompt({
                    formType: 2,
                    value: this.remarkname ? this.remarkname : this.hasFriendsData.nick,
                    title: "�޸ĺ��ѱ�ע",
                    area: ["300px", "36px"]
                }, function(value, index, elem) {
                    _this.editAjax(value, index)
                })
            },
            editAjax(value, index) {
                let _this = this;
                ajax.post("/wx/friend/modifyRemarkname", {
                    data: {
                        remarkname: value,
                        frienduid: this.chatOn
                    },
                    success: function(res) {
                        if (res.ok) {
                            _this.remarkname =
                                value;
                            _this.title = value;
                            let toIndex = _this.chatList.findIndex(item => item.uid == _this.chatOn && !item.groupid);
                            _this.chatList[toIndex].remarkname = value;
                            layer.msg("�޸ĳɹ�");
                            layer.close(index)
                        } else layer.msg(res.msg)
                    }
                })
            },
            delFriend() {
                wxFriendList.friendOn = this.chatOn;
                wxFriendList.delFriend()
            },
            sendMessage() {
                layer.closeAll()
            }
        },
        watch: {
            show(nv) {
                if (nv) {
                    let fromChatOn = this.chatOn;
                    let fromGroupchat = this.isGroupChat;
                    this.$data = Object.assign(this.$data, this.$options.data());
                    this.chatOn = fromChatOn;
                    this.isGroupChat = fromGroupchat;
                    this.show = true;
                    wx.recent();
                    this.chatsData();
                    this.$nextTick(() => {
                        defineScroll($("#wx-message-list"));
                        chatSofftop = $("#chat-bottom").offset().top - 88
                    })
                }
            }
        },
        mounted() {
            otherFun()
        }
    });

    function otherFun() {
        $(document).click(function() {
            if (wxChatVue.mesContextmenu.show == true || wxChatVue.chatpersoncard.show == true) {
                wxChatVue.mesContextmenu.show = false;
                wxChatVue.chatpersoncard.show = false;
                $("#chat-center").mCustomScrollbar("update")
            }
            if (wxFriendList.chatpersoncard.show == true) wxFriendList.chatpersoncard.show = false;
            if (wxChatVue.emojiShow ==
                true) wxChatVue.emojiShow = false
        });
        $("#view-container").on("click", "img", function() {
            var viewer = new Viewer(document.getElementById("view-container"), {
                hidden: function() {
                    viewer.destroy()
                },
                button: true,
                url: "data-original",
                toolbar: {
                    zoomIn: 4,
                    zoomOut: 4,
                    prev: function() {
                        viewer.prev(true)
                    },
                    next: function() {
                        viewer.next(true)
                    }
                },
                title: false,
                navbar: false
            });
            viewer.show()
        });
        $(document).on("click", ".wx-send-img", function() {
            let imgStr = "",
                realsrc = "",
                index = 0;
            let thisImg = $(this).attr("realimg");
            for (let i = 0; i < $(".layim-chat-text>.wx-send-img").length; i++) {
                realsrc =
                    $(".layim-chat-text>.wx-send-img").eq(i).attr("realimg");
                imgStr += `<img src="${realsrc}" />`;
                if (thisImg == realsrc) index = i
            }
            $("#view-container").html(imgStr);
            $("#view-container img").eq(index).click()
        });
        $(document).on("click", ".wx-send-video", function() {
            let realw = $(this).attr("owidth"),
                realh = $(this).attr("oheight"),
                lw = $(window).width(),
                lh = $(window).height();
            if (realw / realh > lw / lh) $("#wx-video-url").css({
                "width": .8 * lw + "px",
                "height": .8 * lw * realh / realw + "px"
            });
            else $("#wx-video-url").css({
                "height": .8 * lh +
                    "px",
                "width": .8 * lh * realw / realh + "px"
            });
            $("#wx-video-url").attr("src", $(this).attr("videourl"));
            $("#wx-video-mask").show()
        });
        $("#wx-video-mask").click("click", function() {
            $("#wx-video-url").attr("src", "");
            $("#wx-video-mask").hide()
        });
        $(document).on("click", ".wx-group-invite", function() {
            if ($(this).attr("isinvited") == "true") {
                let groupid = $(this).attr("groupid");
                ajax.post("/wx/group/inGroup", {
                    data: {
                        groupid
                    },
                    success: function(res) {
                        if (res.ok) {
                            let data = res.data;
                            let desc = "�Ƿ�ȷ��ͬ���Ⱥ��";
                            if (data) {
                                layer.msg("���Ѿ���Ⱥ��Ա�ˣ�");
                                return
                            }
                            layer.open({
                                content: desc,
                                shadeClose: false,
                                btn: ["ȷ��", "ȡ��"],
                                btn1: function(index, layero) {
                                    if (!data) agreeJoin(groupid);
                                    layer.closeAll()
                                }
                            })
                        } else layer.msg(res.msg)
                    }
                })
            }
        });

        function agreeJoin(groupid) {
            ajax.post("/wx/group/agreeInvite", {
                data: {
                    groupid
                },
                success: function(res) {
                    if (res.ok) layer.msg("��Ⱥ�ɹ�");
                    else layer.msg(res.msg)
                }
            })
        }
        $(document).on("click", ".sendVerif", function() {
            applyFriend.applayFriend($(this).attr("uid"))
        });
        $(document).on("click", ".sendAddFriend", function() {
            let uid = $(this).attr("uid");
            layer.prompt({
                formType: 2,
                value: wxChatVue.title,
                title: "���ѱ�ע",
                area: ["300px", "36px"]
            }, function(value, index, elem) {
                ajax.post("/wx/friend/addFriendDirectly", {
                    data: {
                        uid,
                        remarkname: value
                    },
                    success: function(res) {
                        if (res.ok) {
                            layer.close(index);
                            let toIndex = wxChatVue.chatList.findIndex(item => item.uid == wxChatVue.chatOn && !item.groupid);
                            wxChatVue.chatList[toIndex].remarkname = value;
                            wxChatVue.title = value;
                            layer.msg("���Ӻ��ѳɹ�")
                        }
                    }
                })
            })
        })
    }
});
let wxChatList = {
    data() {
        return {
            chatData: []
        }
    },
    methods: {
        chatsData() {
            if (!this.chatOn) {
                if (this.chatList && this.chatList.length > 0) {
                    let oneData = this.chatList[0];
                    let groupid = oneData.groupid,
                        uid = oneData.uid;
                    if (groupid) {
                        this.chatOn = groupid;
                        this.isGroupChat = true;
                        let groupinfo = this.groupInfoAjax();
                        this.title = groupinfo.name + " (" + groupinfo.membercount + ")";
                        if (oneData.notreadcount > 0) {
                            oneData.notreadcount = 0;
                            wx.send(wscommand.WX_GROUP_ALREADY_READ_REQ, {
                                "g": this.chatOn
                            })
                        }
                    } else {
                        this.chatOn = uid;
                        this.isGroupChat = false;
                        this.title = oneData.remarkname ? oneData.remarkname : oneData.nick;
                        oneData.notreadcount = 0;
                        if (curruid == oneData.touid && oneData.readflag == 2) wx.send(wscommand.WX_FRIEND_ALREADY_READ_REQ, {
                            "uid": this.chatOn
                        })
                    }
                }
            } else if (this.isGroupChat) {
                let goIndex = this.chatList.findIndex(item => item.groupid == this.chatOn);
                let groupinfo = this.groupInfoAjax();
                this.title = groupinfo.name + " (" + groupinfo.membercount + ")";
                if (goIndex != -1) {
                    if (this.chatList[goIndex].notreadcount > 0) {
                        this.chatList[goIndex].notreadcount = 0;
                        wx.send(wscommand.WX_GROUP_ALREADY_READ_REQ, {
                            "g": this.chatOn
                        })
                    }
                } else {
                    let grobj = {
                        avatar: groupinfo.avatar,
                        groupid: this.chatOn,
                        nick: groupinfo.name,
                        uid: groupinfo.uid
                    };
                    wxChatVue.chatList.push(grobj)
                }
            } else {
                let toIndex = this.chatList.findIndex(item => item.uid == this.chatOn && !item.groupid);
                if (toIndex != -1) {
                    let zdData = this.chatList[toIndex];
                    this.title = zdData.remarkname ? zdData.remarkname : zdData.nick;
                    zdData.notreadcount = 0;
                    if (curruid == zdData.touid && zdData.readflag == 2) wx.send(wscommand.WX_FRIEND_ALREADY_READ_REQ, {
                        "uid": this.chatOn
                    })
                } else {
                    let uobj = {};
                    if (this.chatOn ==
                        curruid) uobj = {
                        avatar: curruser.avatar,
                        nick: curruser.nick,
                        readflag: 1,
                        touid: curruid,
                        uid: curruid
                    };
                    else {
                        let wuserInfo = getUserInfo(this.chatOn);
                        uobj = {
                            avatar: wuserInfo.avatar,
                            nick: wuserInfo.nick,
                            readflag: 1,
                            touid: this.chatOn,
                            uid: wuserInfo.id
                        }
                    }
                    wxChatVue.chatList.push(uobj)
                }
            }
            this.chatData = [];
            this.chatListAjax();
            notReadMessage()
        },
        chatListClick(e) {
            let $curr = $(e.currentTarget),
                groupid = $curr.attr("groupid"),
                uid = $curr.attr("uid");
            this.title = $curr.attr("title");
            if (groupid) {
                this.chatOn = groupid;
                this.isGroupChat = true;
                let groupinfo = this.groupInfoAjax();
                this.title = groupinfo.name + " (" + groupinfo.membercount + ")";
                let goIndex = wxChatVue.chatList.findIndex(item => item.groupid == groupid);
                if (this.chatList[goIndex].notreadcount > 0) {
                    this.chatList[goIndex].notreadcount = 0;
                    wx.send(wscommand.WX_GROUP_ALREADY_READ_REQ, {
                        "g": this.chatOn
                    })
                }
            } else {
                this.chatOn = uid;
                this.isGroupChat = false;
                let lIndex = wxChatVue.chatList.findIndex(item => item.uid == uid && !item.groupid);
                if (lIndex != -1) wxChatVue.chatList[lIndex].notreadcount = 0;
                if (curruid == $curr.attr("touid") &&
                    (lIndex == -1 || lIndex != -1 && wxChatVue.chatList[lIndex].readflag == 2)) wx.send(wscommand.WX_FRIEND_ALREADY_READ_REQ, {
                    "uid": this.chatOn
                })
            }
            notReadMessage();
            this.chatData = [];
            this.chatListAjax()
        },
        chatListAjax(mid, unshift) {
            let _this = this;
            if (!this.isGroupChat) ajax.get("/wx/friend/queryChatList", {
                data: {
                    uid: this.chatOn,
                    startMid: mid ? mid : ""
                },
                success: function(res) {
                    if (res.ok) {
                        let owner = getUserInfo(curruid),
                            touser = getUserInfo(_this.chatOn),
                            isSendByMe, sendtype, fromuser;
                        let data = res.data;
                        if (!data) return;
                        _this.chatLength =
                            data.length;
                        if (mid) data.sort((a, b) => b.mid - a.mid);
                        else data.sort((a, b) => a.mid - b.mid);
                        $.each(data, (index, item) => {
                            isSendByMe = item.uid == curruid;
                            sendtype = 2;
                            fromuser = touser;
                            if (isSendByMe) {
                                sendtype = 1;
                                fromuser = owner
                            }
                            if (item.sendbysys == 1) sendtype = 3;
                            chatMessageCt(item, fromuser, sendtype, unshift)
                        });
                        if (!mid) _this.$nextTick(() => {
                            _this.initScrollBotm();
                            setTimeout(function() {
                                _this.scrollBotm()
                            }, 300)
                        });
                        else setTimeout(function() {
                            let topOffsetPx = $("#chat-center li:first").offset().top,
                                domOffsetPx = $("#chat-center li").eq(_this.chatLength).offset().top;
                            scrollTopPx = domOffsetPx - topOffsetPx;
                            $("#chat-center").mCustomScrollbar("scrollTo", scrollTopPx + "px", {
                                scrollInertia: 1
                            })
                        }, 150)
                    } else layer.msg(res.msg);
                    _this.wxtips.topload = false
                }
            });
            else ajax.get("/wx/group/queryChatList", {
                data: {
                    groupid: this.chatOn,
                    startMid: mid ? mid : ""
                },
                success: function(res) {
                    if (res.ok) {
                        let isSendByMe, sendtype, fromuser;
                        let data = res.data;
                        _this.chatLength = data.length;
                        if (mid) data.sort((a, b) => b.mid - a.mid);
                        else data.sort((a, b) => a.mid - b.mid);
                        $.each(data, (index, item) => {
                            isSendByMe = item.f == curruid;
                            sendtype = 2;
                            if (isSendByMe) {
                                sendtype = 1;
                                fromuser = curruser
                            } else fromuser = getUserInfo(item.f);
                            if (item.sendbysys == 1) sendtype = 3;
                            chatMessageCt(item, fromuser, sendtype, unshift)
                        });
                        if (!mid) _this.$nextTick(() => {
                            _this.initScrollBotm();
                            setTimeout(function() {
                                _this.scrollBotm()
                            }, 300)
                        });
                        else setTimeout(function() {
                            let topOffsetPx = $("#chat-center li:first").offset().top,
                                domOffsetPx = $("#chat-center li").eq(_this.chatLength).offset().top;
                            scrollTopPx = domOffsetPx - topOffsetPx;
                            $("#chat-center").mCustomScrollbar("scrollTo",
                                scrollTopPx + "px", {
                                    scrollInertia: 1
                                })
                        }, 150)
                    } else layer.msg(res.msg);
                    _this.wxtips.topload = false
                }
            })
        }
    }
};
let wxGroupOpera = {
    data() {
        return {
            friendList: [],
            checkarr: [],
            searchVal: "",
            choosedList: [],
            myFriends: {
                pagenum: 1,
                totalPage: 0
            },
            groupmodeltype: "add",
            groupInfo: [],
            groupmem: {
                pagenum: 1,
                totalPage: 0,
                nick: ""
            },
            groupPeople: []
        }
    },
    methods: {
        groupInfoAjax() {
            let _this = this;
            let data = getWxGroupInfo(this.chatOn);
            _this.groupInfo = data;
            return data
        },
        groupMember() {
            this.groupmem.pagenum = 1;
            this.getMemberAjax()
        },
        getMemberAjax() {
            let _this = this;
            var data = getWxGroupMember(this.chatOn, this.groupmem.pagenum, this.groupmem.nick);
            _this.groupmem.totalPage =
                data.totalPage;
            _this.groupmem.totalRow = data.totalRow;
            if (_this.groupmem.pagenum == 1) {
                _this.groupPeople = data.list;
                _this.$nextTick(() => {
                    defineScroll($("#group-popoup-content"), "", {
                        onTotalScroll: function() {
                            if (_this.groupmem.pagenum < _this.groupmem.totalPage) {
                                _this.groupmem.pagenum++;
                                _this.getMemberAjax()
                            }
                        }
                    })
                })
            } else _this.groupPeople = _this.groupPeople.concat(data.list)
        },
        chatSetIcon(e) {
            let index = $(e.currentTarget).index();
            let tips = "";
            tips = index == 0 ? "Ⱥ����" : index == 1 ? "������Ϣ" : "Ⱥ����";
            layer.tips(tips, `#chat-set_${index}`, {
                tips: 3,
                time: 1E3
            })
        },
        chatSetClick(e) {
            let _this = this;
            let index = $(e.currentTarget).index();
            let notice = this.groupInfo.notice;
            if (index == 0) {
                if (!notice) {
                    layer.msg("����Ⱥ����");
                    return
                }
                layer.open({
                    title: "Ⱥ����",
                    content: this.groupInfo.notice,
                    shadeClose: false
                })
            }
            if (index == 1) {
                _this.groupMember();
                let totalr = _this.groupmem.totalRow;
                let area = [];
                if (totalr <= 3) area = ["480px", "385px"];
                else if (totalr <= 8) area = ["480px", "458px"];
                else if (totalr <= 13) area = ["480px", "532px"];
                else area = ["480px", "558px"];
                layer.open({
                    title: false,
                    type: 1,
                    title: false,
                    shadeClose: false,
                    content: $("#group-info-popoup"),
                    area: area
                })
            }
        },
        isFriend(uid) {
            this.chatpersoncard.isfriend = getIsFriend(uid)
        },
        startChat() {
            this.isGroupChat = false;
            if (this.chatOn == this.chatpersoncard.data.id) return;
            this.chatOn = this.chatpersoncard.data.id;
            this.chatsData()
        },
        applayFriend() {
            applyFriend.applayFriend(this.chatpersoncard.data.id)
        },
        addGroupMember() {
            this.showOperaModel($("#addGroupMember"), "add")
        },
        delGroupMember() {
            this.showOperaModel($("#delGroupMember"), "del")
        },
        signOutGroup() {
            let url =
                "/wx/group/leave";
            if (this.groupInfo.uid == curruid) url = "/wx/group/del";
            ajax.post(url, {
                data: {
                    groupid: this.groupInfo.id
                },
                success: function(res) {
                    if (res.ok) layer.closeAll();
                    else layer.msg(res.msg)
                }
            })
        },
        modifyName() {
            let namedata = {
                value: this.groupInfo.name,
                title: "Ⱥ������",
                area: ["300px", "36px"],
                code: "name",
                postdata: {
                    groupid: this.groupInfo.id
                },
                url: "/wx/group/modifyName"
            };
            this.modifyModel(namedata)
        },
        modifyNotice() {
            let noticedata = {
                value: this.groupInfo.notice,
                title: "Ⱥ����",
                area: ["400px", "150px"],
                code: "notice",
                url: "/wx/group/modifyNotice",
                postdata: {
                    groupid: this.groupInfo.id
                }
            };
            this.modifyModel(noticedata)
        },
        modifyIntro() {
            let introdata = {
                value: this.groupInfo.intro,
                title: "Ⱥ���",
                area: ["400px", "150px"],
                code: "intro",
                url: "/wx/group/modifyIntro",
                postdata: {
                    groupid: this.groupInfo.id
                }
            };
            this.modifyModel(introdata)
        },
        modifyModel(data) {
            if (this.groupInfo.uid == curruid) {
                let _this = this;
                layer.prompt({
                    formType: 2,
                    value: data.value,
                    title: data.title,
                    area: data.area
                }, function(value, index, elem) {
                    data.value = value;
                    data.postdata[data.code] = value;
                    data.index = index;
                    _this.modifyAjax(data)
                })
            }
        },
        modifyAjax(data) {
            let _this = this;
            ajax.post(data.url, {
                data: data.postdata,
                success: function(res) {
                    if (res.ok) {
                        _this.groupInfo[data.code] = data.value;
                        layer.close(data.index)
                    } else layer.msg(res.msg)
                }
            })
        },
        friendsData() {
            let _this = this;
            ajax.get("/wx/friend/myFriendsFilterGroup", {
                data: {
                    pageNumber: _this.myFriends.pagenum,
                    nick: _this.searchVal,
                    groupid: this.groupInfo.id
                },
                success: function(res) {
                    if (res.ok) {
                        let data = res.data;
                        if (!data) return;
                        _this.myFriends.totalPage = data.totalPage;
                        if (_this.myFriends.pagenum == 1) {
                            _this.friendList =
                                data.list;
                            _this.$nextTick(() => {
                                defineScroll($("#wx-friend-list"), "", {
                                    onTotalScroll: function() {
                                        if (_this.myFriends.pagenum < _this.myFriends.totalPage) {
                                            _this.myFriends.pagenum++;
                                            _this.friendsData()
                                        }
                                    }
                                })
                            })
                        } else _this.friendList = _this.friendList.concat(data.list)
                    } else layer.msg(res.msg)
                }
            })
        },
        inGroupFrineds() {
            let _this = this;
            let data = getWxGroupMember(this.groupInfo.id, this.myFriends.pagenum, this.searchVal);
            this.myFriends.totalPage = data.totalPage;
            if (this.myFriends.pagenum == 1) {
                this.friendList = data.list;
                this.$nextTick(() => {
                    defineScroll($("#group-friend-list"), "", {
                        onTotalScroll: function() {
                            if (_this.myFriends.pagenum < _this.myFriends.totalPage) {
                                _this.myFriends.pagenum++;
                                _this.inGroupFrineds()
                            }
                        }
                    })
                })
            } else this.friendList = this.friendList.concat(data.list)
        },
        friendRowClick(e) {
            let mark = $(e.currentTarget).attr("mark");
            let findIn = this.checkarr.findIndex(item => item == mark);
            this.choosedFriends(mark, findIn);
            if (findIn != -1) this.checkarr.splice(findIn, 1);
            else this.checkarr.push(mark)
        },
        searchFriends() {
            this.friendsData()
        },
        choosedFriends(mark,
            index) {
            if (index != -1) this.choosedList.map((item, i) => {
                if (item.uid == this.checkarr[index]) this.choosedList.splice(i, 1)
            });
            else {
                let choosedobj = {};
                this.friendList.map(item => {
                    if (item.uid == mark) choosedobj = item
                });
                this.choosedList.push(choosedobj);
                this.$nextTick(() => {
                    defineScroll($("#wx-choosed-list"))
                })
            }
        },
        deleteChoosed(id) {
            let findIn = this.checkarr.findIndex(item => item == id);
            this.choosedFriends(id, findIn);
            this.checkarr.splice(findIn, 1)
        },
        wxSure() {
            let _this = this;
            if (this.checkarr.length == 0) {
                layer.msg("��ѡ����Ա");
                return
            }
            ajax.post("/wx/group/invite", {
                data: $("#addmember-form").serialize() + "&groupid=" + this.groupInfo.id,
                success: function(res) {
                    if (res.ok) layer.closeAll();
                    else layer.msg(res.msg)
                }
            })
        },
        resetData() {
            this.friendList = [], this.checkarr = [], this.searchVal = "", this.choosedList = [], this.myFriends = {
                pagenum: 1,
                totalPage: 0
            }
        },
        showOperaModel(id, type) {
            this.resetData();
            layer.open({
                title: false,
                type: 1,
                title: false,
                shadeClose: false,
                content: id,
                area: "[550px,500px]"
            });
            this.groupmodeltype = type;
            if (type == "add") this.friendsData();
            if (type == "del") this.inGroupFrineds()
        },
        wxSureDel() {
            let _this = this;
            if (this.checkarr.length == 0) {
                layer.msg("��ѡ����Ա");
                return
            }
            ajax.post("/wx/group/delMember", {
                data: $("#addmember-form2").serialize() + "&groupid=" + this.groupInfo.id,
                success: function(res) {
                    if (res.ok) {
                        layer.closeAll();
                        let groupinfo = _this.groupInfoAjax();
                        _this.title = groupinfo.name + " (" + groupinfo.membercount + ")"
                    } else layer.msg(res.msg)
                }
            })
        },
        delsearchFriends() {
            this.inGroupFrineds()
        }
    }
};
let wxFriendList = null;
$(function() {
    wxFriendList = new Vue({
        el: "#wx-vue-friend",
        data() {
            return {
                friendList: [],
                groupChatList: [],
                show: false,
                searchVal: "",
                friendOn: "",
                keyWords: "",
                title: "�µ�����",
                mark: {
                    newfriend: "�µ�����",
                    groupchat: "Ⱥ��"
                },
                rightshow: 1,
                newFriends: [],
                groupPeople: [],
                hasFriendsData: {},
                chatpersoncard: {
                    show: false,
                    top: 0,
                    left: 0,
                    data: {},
                    isfriend: false
                },
                myFriends: {
                    pagenum: 1,
                    totalPage: 0,
                    totalRow: 0
                },
                groupmem: {
                    pagenum: 1,
                    totalPage: 0,
                    nick: ""
                },
                remarkname: ""
            }
        },
        methods: {
            friendsData() {
                this.groupListAjax();
                this.myFriendsAjax()
            },
            groupListAjax() {
                let _this =
                    this;
                ajax.get("/wx/group/list", {
                    data: {
                        groupname: _this.searchVal
                    },
                    async: false,
                    success: function(res) {
                        if (res.ok) _this.groupChatList = res.data;
                        else layer.msg(res.msg)
                    }
                })
            },
            myFriendsAjax() {
                let _this = this;
                ajax.get("/wx/friend/myFriends", {
                    data: {
                        pageNumber: _this.myFriends.pagenum,
                        nick: _this.searchVal
                    },
                    success: function(res) {
                        if (res.ok) {
                            let data = res.data;
                            if (!data) return;
                            _this.myFriends.totalPage = data.totalPage;
                            _this.myFriends.totalRow = data.totalRow;
                            if (_this.myFriends.pagenum == 1) {
                                _this.friendList = data.list;
                                _this.$nextTick(() => {
                                    defineScroll($("#wx-friends-list"), "", {
                                        onTotalScroll: function() {
                                            if (_this.myFriends.pagenum < _this.myFriends.totalPage) {
                                                _this.myFriends.pagenum++;
                                                _this.myFriendsAjax()
                                            }
                                        }
                                    })
                                })
                            } else _this.friendList = _this.friendList.concat(data.list)
                        } else layer.msg(res.msg)
                    }
                })
            },
            applyList(status) {
                let _this = this;
                ajax.get("/wx/friend/queryLastApply", {
                    success: function(res) {
                        if (res.ok) {
                            if (!res.data) return;
                            let applyData = res.data,
                                length = 0;
                            _this.newFriends = applyData;
                            applyData.map(item => {
                                if (item.status == 4) length++
                            });
                            if (_this.show ==
                                false && length > 0 || _this.rightshow != 1 && length > 0) {
                                $("#newapply_friends").html(length);
                                $("#newapply_friends").show()
                            } else $("#newapply_friends").hide();
                            _this.$nextTick(() => {
                                defineScroll($("#wx-newfri-list"))
                            })
                        } else layer.msg(res.msg)
                    }
                })
            },
            searchFriends() {
                this.myFriends.pagenum = 1;
                this.friendsData()
            },
            wxApplyPass(fromuid, remarkname, result) {
                let _this = this;
                ajax.post("/wx/friend/replyApplyFriend", {
                    data: {
                        result,
                        fromuid,
                        remarkname
                    },
                    success: function(res) {
                        if (res.ok) {
                            layer.closeAll();
                            if (result == 1) layer.msg("���Ӻ��ѳɹ�");
                            if (result == 2) layer.msg("�ܾ����Ӻ��ѳɹ�");
                            _this.applyList();
                            _this.myFriends.pagenum = 1;
                            _this.friendsData()
                        } else layer.msg(res.msg)
                    }
                })
            },
            wxPassRemark(fromuid, nick, result) {
                let _this = this;
                layer.prompt({
                    formType: 2,
                    value: nick,
                    title: "���ѱ�ע",
                    area: ["300px", "36px"]
                }, function(value, index, elem) {
                    _this.wxApplyPass(fromuid, value, result)
                })
            },
            groupMember() {
                this.groupmem.pagenum = 1;
                this.getMemberAjax()
            },
            getMemberAjax() {
                let _this = this;
                var data = getWxGroupMember(this.friendOn, this.groupmem.pagenum, this.groupmem.nick);
                _this.groupmem.totalPage =
                    data.totalPage;
                if (_this.groupmem.pagenum == 1) {
                    _this.groupPeople = data.list;
                    _this.$nextTick(() => {
                        defineScroll($("#wx-group-list"), "", {
                            onTotalScroll: function() {
                                if (_this.groupmem.pagenum < _this.groupmem.totalPage) {
                                    _this.groupmem.pagenum++;
                                    _this.getMemberAjax()
                                }
                            }
                        })
                    })
                } else _this.groupPeople = _this.groupPeople.concat(data.list)
            },
            friendRowClick(e) {
                let $cure = $(e.currentTarget);
                let status = $cure.attr("status");
                if (status && status != 1) return;
                this.friendOn = $cure.attr("mark");
                this.title = $cure.attr("title");
                this.remarkname =
                    $cure.attr("remarkname");
                if (this.title == this.mark.newfriend) {
                    this.rightshow = 1;
                    this.applyList()
                } else {
                    this.rightshow = 3;
                    this.friendInfo()
                }
            },
            groupRowClick(e) {
                this.friendOn = e.currentTarget.getAttribute("mark");
                this.title = e.currentTarget.getAttribute("title");
                this.rightshow = 2;
                this.groupMember()
            },
            friendInfo() {
                this.hasFriendsData = getUserInfo(this.friendOn)
            },
            sendMessage() {
                if (this.rightshow == 2) wxChatVue.isGroupChat = true;
                else wxChatVue.isGroupChat = false;
                wxChatVue.chatOn = this.friendOn;
                toShow("0")
            },
            showCard(e) {
                let uid =
                    $(e.currentTarget).attr("uid");
                this.isFriend(uid);
                this.chatpersoncard["data"] = getUserInfo($(e.currentTarget).attr("uid"));
                this.chatpersoncard.show = true;
                this.chatpersoncard.top = e.pageY - 50 + "px";
                this.chatpersoncard.left = e.pageX - (document.body.scrollWidth - $(".layui-container").width()) / 2 - 300 + "px"
            },
            applayFriend() {
                applyFriend.applayFriend(this.chatpersoncard.data.id)
            },
            isFriend(uid) {
                this.chatpersoncard.isfriend = getIsFriend(uid)
            },
            startChat() {
                wxChatVue.isGroupChat = false;
                wxChatVue.chatOn = this.chatpersoncard.data.id;
                toShow("0")
            },
            editFriendName() {
                let _this = this;
                layer.prompt({
                    formType: 2,
                    value: this.remarkname,
                    title: "�޸ĺ��ѱ�ע",
                    area: ["300px", "36px"]
                }, function(value, index, elem) {
                    _this.editAjax(value, index)
                })
            },
            editAjax(value, index) {
                let _this = this;
                ajax.post("/wx/friend/modifyRemarkname", {
                    data: {
                        remarkname: value,
                        frienduid: this.friendOn
                    },
                    success: function(res) {
                        if (res.ok) {
                            _this.remarkname = value;
                            layer.msg("�޸ĳɹ�");
                            layer.close(index)
                        } else layer.msg(res.msg)
                    }
                })
            },
            delFriend() {
                let _this = this;
                layer.open({
                    content: "ȷ��ɾ������?",
                    shadeClose: false,
                    btn: ["ȷ��", "ȡ��"],
                    btn1: function(index) {
                        _this.delFriendAjax()
                    }
                })
            },
            delFriendAjax(index) {
                let _this = this;
                ajax.post("/wx/friend/delFriend", {
                    data: {
                        frienduid: _this.friendOn
                    },
                    success: function(res) {
                        if (res.ok) {
                            let findex = _this.friendList.findIndex(item => item.uid == _this.friendOn);
                            _this.friendOn = "�µ�����";
                            _this.title = "�µ�����";
                            _this.rightshow = 1;
                            _this.friendList.splice(findex, 1);
                            layer.closeAll();
                            layer.msg("ɾ���ɹ�");
                            _this.myFriends.totalRow--
                        } else layer.msg(res.msg)
                    }
                })
            }
        },
        watch: {
            show(nv) {
                if (nv) {
                    this.$data = Object.assign(this.$data,
                        this.$options.data());
                    this.show = true;
                    this.rightshow = 1;
                    this.friendsData();
                    this.applyList()
                }
            }
        }
    })
});
let applyFriend = null;
$(function() {
    applyFriend = new Vue({
        el: "#wx-apply-container",
        data() {
            return {
                searchValue: "",
                searchResult: false,
                show: false,
                search: {
                    searchNum: 1,
                    totalPage: 0
                },
                searchData: []
            }
        },
        methods: {
            searchFriend() {
                this.search.searchNum = 1;
                this.searchAjax()
            },
            searchAjax() {
                let _this = this;
                ajax.get("/user/search", {
                    data: {
                        "pageNumber": this.search.searchNum,
                        nick: this.searchValue
                    },
                    success: function(res) {
                        if (res.ok) {
                            let data = res.data;
                            if (!data) {
                                _this.searchResult = false;
                                return
                            }
                            _this.search.totalPage = data.totalPage;
                            data.totalPage == 0 ? _this.searchResult =
                                false : _this.searchResult = true;
                            if (_this.search.searchNum == 1) {
                                _this.searchData = data.list;
                                _this.$nextTick(() => {
                                    defineScroll($("#wx-apply-result"), "", {
                                        onTotalScroll: function() {
                                            if (_this.search.searchNum < _this.search.totalPage) {
                                                _this.search.searchNum++;
                                                _this.searchAjax()
                                            }
                                        }
                                    })
                                })
                            } else _this.searchData = _this.searchData.concat(data.list)
                        } else layer.msg(res.msg)
                    }
                })
            },
            applayFriend(id) {
                let _this = this;
                layer.prompt({
                    formType: 2,
                    value: "����" + curruser.nick,
                    title: "��������",
                    area: ["360px", "140px"]
                }, function(value, index, elem) {
                    _this.applayAjax(id,
                        value, index)
                })
            },
            applayAjax(id, value, index) {
                ajax.post("/wx/friend/applyFriend", {
                    data: {
                        "touid": id,
                        greet: value
                    },
                    success: function(res) {
                        if (res.ok) {
                            layer.msg("����ɹ�");
                            layer.close(index)
                        } else layer.msg(res.msg)
                    }
                })
            }
        },
        watch: {
            show(nv) {
                if (nv) {
                    this.$data = Object.assign(this.$data, this.$options.data());
                    this.show = true
                }
            }
        }
    })
});
let createChat = null;
$(function() {
    createChat = new Vue({
        el: "#wx-vue-creatchat",
        data() {
            return {
                friendList: [],
                checkarr: [],
                searchVal: "",
                choosedList: [],
                show: false,
                myFriends: {
                    pagenum: 1,
                    totalPage: 0
                },
                formData: {
                    name: "",
                    intro: "",
                    url: "",
                    upfile: null,
                    imgname: ""
                },
                wxcropper: {
                    cropperImg: $("#wx-img-container > img"),
                    layIndex: "",
                    cropper: null
                },
                name: "����Ⱥ��"
            }
        },
        methods: {
            friendsData() {
                let _this = this;
                ajax.get("/wx/friend/myFriends", {
                    data: {
                        pageNumber: _this.myFriends.pagenum,
                        nick: _this.searchVal
                    },
                    success: function(res) {
                        if (res.ok) {
                            let data = res.data;
                            if (!data) return;
                            _this.myFriends.totalPage = data.totalPage;
                            if (_this.myFriends.pagenum == 1) {
                                _this.friendList = data.list;
                                _this.$nextTick(() => {
                                    defineScroll($("#create-friend-list"), "", {
                                        onTotalScroll: function() {
                                            if (_this.myFriends.pagenum < _this.myFriends.totalPage) {
                                                _this.myFriends.pagenum++;
                                                _this.friendsData()
                                            }
                                        }
                                    })
                                })
                            } else _this.friendList = _this.friendList.concat(data.list)
                        } else layer.msg(res.msg)
                    }
                })
            },
            friendRowClick(e) {
                let mark = $(e.currentTarget).attr("mark");
                let findIn = this.checkarr.findIndex(item => item == mark);
                this.choosedFriends(mark, findIn);
                if (findIn != -1) this.checkarr.splice(findIn, 1);
                else this.checkarr.push(mark)
            },
            searchFriends() {
                this.myFriends.pagenum = 1;
                this.friendsData()
            },
            choosedFriends(mark, index) {
                if (index != -1) this.choosedList.map((item, i) => {
                    if (item.uid == this.checkarr[index]) this.choosedList.splice(i, 1)
                });
                else {
                    let choosedobj = {};
                    this.friendList.map(item => {
                        if (item.uid == mark) choosedobj = item
                    });
                    this.choosedList.push(choosedobj);
                    this.$nextTick(() => {
                        defineScroll($("#wx-choosed-list"))
                    })
                }
            },
            deleteChoosed(id) {
                let findIn =
                    this.checkarr.findIndex(item => item == id);
                this.choosedFriends(id, findIn);
                this.checkarr.splice(findIn, 1)
            },
            wxSure() {
                let _this = this;
                if (this.checkarr.length == 0) {
                    layer.msg("��ѡ����Ա");
                    return
                }
                layer.open({
                    title: false,
                    type: 1,
                    skin: "create_group_radius",
                    shadeClose: false,
                    content: $("#createContent"),
                    area: ["540px", "330px"]
                })
            },
            wxSureCreate() {
                let resetdata = {
                    checkarr: [],
                    choosedList: [],
                    formData: {
                        name: "",
                        intro: "",
                        url: "",
                        upfile: null
                    }
                };
                let {
                    formData
                } = this;
                let _this = this;
                if (formData.name == "") {
                    layer.msg("������Ⱥ������");
                    return
                }
                let fd =
                    new FormData;
                fd.append("joinmode", 1);
                fd.append("uidList", this.checkarr.join(","));
                fd.append("name", formData.name);
                fd.append("intro", formData.intro);
                ajax.post("/wx/group/createGroup", {
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(res) {
                        if (res.ok) {
                            layer.closeAll();
                            Object.assign(_this.$data, resetdata)
                        } else layer.msg(res.msg)
                    }
                })
            },
            wxGroupAvatar(e) {
                let _this = this;
                var file = e.currentTarget.files[0];
                if (file) {
                    _this.formData.imgname = file.name;
                    let done = function(url) {
                        e.currentTarget.value = "";
                        document.getElementById("upcropperImg").src =
                            url;
                        _this.wxcropper.layIndex = layer.open({
                            type: 1,
                            title: false,
                            shadeClose: false,
                            content: $("#wxUploadImg"),
                            area: "[500px,570px]"
                        });
                        _this.cropperInit()
                    };
                    if (URL) done(URL.createObjectURL(file));
                    else if (FileReader) {
                        reader = new FileReader;
                        reader.onload = function(e) {
                            done(reader.result)
                        };
                        reader.readAsDataURL(file)
                    }
                }
            },
            sureCropper(e) {
                let _this = this;
                if (this.wxcropper.cropper) {
                    let canvas = this.wxcropper.cropper.getCroppedCanvas({
                        width: 160,
                        height: 160
                    });
                    this.formData.url = canvas.toDataURL();
                    canvas.toBlob(function(blob) {
                        _this.formData.upfile = {
                            name: _this.formData.imgname,
                            blob
                        };
                        _this.closeCropper()
                    })
                }
            },
            cropperInit() {
                let options = {
                    aspectRatio: 1,
                    viewMode: 1
                };
                this.formData.upfile = {};
                this.formData.url = "";
                if (this.wxcropper.cropper) this.wxcropper.cropper.destroy();
                this.wxcropper.cropper = new Cropper(document.getElementById("upcropperImg"), options)
            },
            closeCropper() {
                if (this.wxcropper.cropper) this.wxcropper.cropper.destroy();
                layer.close(this.wxcropper.layIndex)
            }
        },
        watch: {
            show(nv) {
                if (nv) {
                    this.$data = Object.assign(this.$data, this.$options.data());
                    this.show =
                        true;
                    this.friendsData()
                }
            }
        }
    })
});
var autioDom;
$(function() {
    initWs();
    autioDom = document.getElementById("nofity_audio");
    $("title").html("tio-chat �����й�˾�����ó�IM")
});

function defineScroll(dom, scrollTop, cb) {
    dom.mCustomScrollbar("destroy");
    dom.mCustomScrollbar({
        scrollbarPosition: "outside",
        theme: "minimal-dark",
        scrollInertia: 200,
        mouseWheel: {
            preventDefault: true
        },
        setTop: scrollTop ? scrollTop : 0,
        callbacks: cb ? cb : {},
        updateOnImageLoad: true,
        updateOnSelectorChange: "#chat-center li"
    })
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], {
        type: mime
    })
}

function getIsFriend(uid) {
    var data = null;
    var cacheName = "ismfriend";
    data = tioCache.get(cacheName, uid);
    if (data) return data;
    ajax.get("/wx/friend/isFriend", {
        async: false,
        data: {
            uid
        },
        success: function(res) {
            if (res.ok) {
                data = res.data;
                tioCache.set(cacheName, uid, res.data, {
                    exp: 5
                })
            }
        }
    });
    return data
}

function chatMessageCt(bodyObj, fromuser, sendtype, unshift) {
    let ct = bodyObj.ct;
    let bodyhtml = "";
    switch (ct) {
        case 1:
            bodyhtml = bodyObj.c.replace(/\n/g, "<br>");
            if (bodyhtml.match(/\[([^(\]|\[)]*)\]/g) != null) bodyhtml = replaceEmoji(bodyObj.c);
            let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            bodyhtml = bodyhtml.replace(reg, "<a href='$1$2' target='_blank'>$1$2</a>");
            break;
        case 3:
            let textdata = JSON.parse(bodyObj.c)[0];
            bodyhtml = `<div class="flexbox">
                    <i class="enclosure"></i>
                    <div class="wx-file-auto">
                        <p class="overell wx-filename">${textdata.filename}</p>
                        <p class="overell wx-file-size">${formatSize1(textdata.size)}</p>
                    </div>
                    <a href="${res_url(textdata.url)}" target="_blank" download="${textdata.filename}" class="wx-download"></a>
                </div>`;
            break;
        case 5:
            let videodata = JSON.parse(bodyObj.c)[0],
                {
                    cwidth,
                    cheight
                } = videodata;
            let sWidth, sHeight;
            if (cwidth >= 200) sWidth = 200;
            else sWidth = cwidth;
            sHeight = sWidth * cheight / cwidth;
            bodyhtml = `<div class="wx-send-video" videourl="${res_url(videodata.url)}" owidth="${videodata.width}" oheight="${videodata.height}"  style="width:${sWidth}px;height:${sHeight}px">
                    <div class="wx-video-name">
                        <p>${videodata.formatedseconds}</p>
                        <p class="overell">${videodata.filename}</p>
                    </div>
                    <img src='${res_url(videodata.coverurl)}' class='wx-send-img'/>
                </div>`;
            break;
        case 6:
            let data = JSON.parse(bodyObj.c)[0],
                {
                    coverwidth,
                    coverheight
                } = data;
            let showWidth, showHeight;
            if (coverwidth >= 200) showWidth = 200;
            else showWidth = coverwidth;
            showHeight = showWidth * coverheight / coverwidth;
            bodyhtml = `<img src='${res_url(data.coverurl)}' style="width:${showWidth}px;height:${showHeight}px" class='wx-send-img' realimg="${res_url(data.url)}"/>`;
            break;
        case 8:
            let invitedata = JSON.parse(bodyObj.c);
            let groupdata = getWxGroupInfo(invitedata.groupid),
                isinvited = bodyObj.uid !=
                curruid;
            style = isinvited ? "cursor:pointer" : "";
            if (groupdata) bodyhtml = `<div class="wx-group-invite" groupid="${invitedata.groupid}" isinvited="${isinvited}" style="${style}">
                        <p>���������Ⱥ��</p>
                        <div class="invite-flex">
                            <p>${fromuser.nick}���������${groupdata.name}Ⱥ��</p>
                            <img src="${res_url(groupdata.avatar)}"/>
                        </div>
                    </div>`;
            break
    }
    if (bodyhtml)
        if (unshift) wxChatVue.chatData.unshift({...bodyObj,
            type: sendtype,
            html: bodyhtml,
            name: fromuser.nick,
            imgsrc: fromuser.avatar,
            uid: bodyObj.uid ? bodyObj.uid : bodyObj.f
        });
        else wxChatVue.chatData.push({...bodyObj,
            type: sendtype,
            html: bodyhtml,
            name: fromuser.nick,
            imgsrc: fromuser.avatar,
            uid: bodyObj.uid ? bodyObj.uid : bodyObj.f
        })
};