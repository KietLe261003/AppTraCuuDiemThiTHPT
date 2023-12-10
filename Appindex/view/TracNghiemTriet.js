import React, { Component, useEffect, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    FlatList,
    Select,
    Option,
    OptionList,
    Dimensions,
    Modal
} from "react-native";
//import data from "../function/Quiz_data";
import axios from "axios";
import TabBar from "../navigation/TabBar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
function TracnghiemTriet({ navigation }) {

    //const [data, setData] = useState([]);
    const [allQuestion,setallQuestion]=useState([
        {
            index: 1,
            Question: 'Vì sao trình độ phát triển của thế giới quan là tiêu chí quan trọng đánh giá mức độ trưởng thành của mỗi cá nhân trong nhận thức và cải tạo thế giới?',
            Option: [
            'Vì những vấn đề triết học đặt ra là vấn đề con người nhận thức thế giới như thế nào ', 
            'Vì những vấn đề triết học đặt ra trước hết là vấn đề tư duy, ý thức ',
            'Vì nó sẽ quyết định mức độ hoàn thiện của phương thức tư duy, nhân sinh quan trong khám phá và chinh phục thế giới ', 
            'Vì nó sẽ quyết định trình độ của cá nhân trong quá trình nhận thức thế giới '],
            AcpOption: 'Vì nó sẽ quyết định mức độ hoàn thiện của phương thức tư duy, nhân sinh quan trong khám phá và chinh phục thế giới ',
        },
        {
            index: 2,
            Question: 'Trong quá trình nhận thức, nếu con người xem xét phiến diện, tuyệt đối hóa, thần thánh hóa một mặt, một đặc tính nào đó của sự vật, hiện tượng khách quan là họ đang thiên về tư tưởng nào?',
            Option: [
            'Kinh viện', 
            'Duy tâm',
            'Siêu hình', 
            'Hiện sinh'],
            AcpOption: 'Duy tâm',
        },
        {
            index: 3,
            Question: 'Nếu anh/chị là người nghiên cứu khoa học tự nhiên (vật lý, hóa học, sinh học…) hoặc khoa học chuyên ngành thì tri thức triết học có tác động đến anh/chị không? Tại sao?',
            Option: [
            'Không. Vì tri thức triết học không ảnh hưởng hoặc chi phối đến khoa học tự nhiên', 
            'Có. Vì tri thức triết học là tri thức vĩ mô, là khoa học của mọi khoa học',
            'Có. Vì tri thức triết học luôn xuất hiện trong thế giới quan của mỗi người', 
            'Không. Vì tri thức triết học không tác động trực tiếp lên thành quả lao động của con người'],
            AcpOption: 'Có. Vì tri thức triết học luôn xuất hiện trong thế giới quan của mỗi người',
        },
        {
            index: 4,
            Question: 'Vì sao khi thực hiện các dự án khởi nghiệp, anh/chị phải dự kiến những tình huống không mong muốn có thể xảy ra?',
            Option: [
            'Vì bên cạnh nội dung sẽ xuất hiện hiện tượng chi phối', 
            'Vì bên cạnh cái tất nhiên thường có cái ngẫu nhiên làm biến đổi kết quả',
            'Vì bên cạnh bản chất sẽ xuất hiện những hiện tượng không phù hợp', 
            'Vì bên cạnh kết quả sẽ xuất hiện những nguyên nhân trái chiều'],
            AcpOption: 'Vì bên cạnh cái tất nhiên thường có cái ngẫu nhiên làm biến đổi kết quả',
        },
        {
            index: 5,
            Question: 'Biểu hiện của chủ nghĩa cơ hội trong đời sống xã hội hiện nay là gì?',
            Option: [
            'Chỉ nghĩ đến lợi ích vật chất', 
            'Sống và làm việc không theo định hướng, đường lối rõ rệt, không có chính kiến hẳn hoi, ngả nghiêng nhằm mưu lợi trước mắt',
            'Chỉ nghĩ đến bản thân và gia đình của mình không chú ý đến lợi ích của tập thể', 
            'Nhận thức đúng và làm theo yêu cầu thực tiễn'],
            AcpOption: 'Sống và làm việc không theo định hướng, đường lối rõ rệt, không có chính kiến hẳn hoi, ngả nghiêng nhằm mưu lợi trước mắt',
        },
        {
            index: 6,
            Question: 'Hiện nay có khá nhiều người tôn sùng tri thức lý luận nhưng sống xa rời thực tiễn, xem thường kinh nghiệm của cha, ông; phủ định giá trị của cả một thời kỳ lịch sử… Theo anh/chị, họ đang rơi vào khuynh hướng nào sau đây?',
            Option: [
            'Chủ nghĩa kinh viện', 
            'Chủ nghĩa duy vật siêu hình',
            'Chủ nghĩa kinh nghiệm', 
            'Chủ nghĩa duy vật biện chứng'],
            AcpOption: 'Chủ nghĩa kinh viện',
        },
        {
            index: 7,
            Question: 'Các cá nhân chỉ chú ý đến lợi ích của bản thân, đề cao vật chất, không quan tâm đến lợi ích cộng đồng, là biểu hiện của:',
            Option: [
            'Chủ nghĩa thực chứng', 
            'Chủ nghĩa hiện sinh',
            'Chủ nghĩa duy tâm chủ quan', 
            'Chủ nghĩa thực dụng'],
            AcpOption: 'Chủ nghĩa thực dụng',
        },
        {
            index: 8,
            Question: 'Theo anh/chị, nguyên nhân chủ yếu nào dẫn đến sự chấm dứt thời hoàng kim của khuynh hướng triết học duy tâm khách quan?',
            Option: [
            'Những phát minh của khoa học tự nhiên thời kỳ Cổ đại', 
            'Những phát minh của khoa học tự nhiên thời kỳ tư bản phát triển',
            'Những phát minh của khoa học tự nhiên thời kỳ Cận đại', 
            'Những phát minh của khoa học tự nhiên thời kỳ Hiện đại'],
            AcpOption: 'Những phát minh của khoa học tự nhiên thời kỳ Cận đại',
        },
        {
            index: 9,
            Question: 'Trong giai đoạn hiện nay, một bộ phận thanh – thiếu niên lười lao động, thích hưởng thụ; sống gấp, coi nhẹ các giá trị đạo đức nhân văn, truyền thống… Theo anh/chị, đó là biểu hiện của:',
            Option: [
            'Lối sống tự do hưởng lợi', 
            'Lối sống thực dụng, tầm thường',
            'Lối sống thực tế, vị kỷ ', 
            'Lối sống tự do tư bản tư nhân '],
            AcpOption: 'Lối sống thực dụng, tầm thường',
        },
        {
            index: 10,
            Question: 'Theo anh/chị, câu nói sau đây thể hiện quan điểm triết học nào: “Mọi thành kiến đều là sai lầm; mỗi người đều có tính cách riêng, sở trường riêng, đời sống riêng của bản thân và gia đình mình. Nếu những lợi ích cá nhân đó không trái với lợi ích tập thể thì không có gì là xấu”?',
            Option: [
            'Duy vật biện chứng', 
            'Thực chứng logic và phân tích ',
            'Duy vật siêu hình ', 
            'Thực chứng '],
            AcpOption: 'Duy vật biện chứng',
        },
        {
            index: 11,
            Question: 'Khi nhà triết học Hêraclit khẳng định: “Tôi thích cái gì mà có thể nhìn thấy được và nghe thấy được” là muốn đánh giá cao vai trò của yếu tố nào sau đây?',
            Option: [
            'Bộ não trong nhận thức ', 
            'Đôi mắt trong nhận thức các sự vật đơn lẻ ',
            'Trái tim trong nhận thức ', 
            'Giác quan trong nhận thức các sự vật đơn lẻ'],
            AcpOption: 'Giác quan trong nhận thức các sự vật đơn lẻ',
        },
        {
            index: 12,
            Question: 'Quan điểm triết học nào cho rằng: Ý thức của con người luôn phù hợp với bản thân sự vật, con người có thể hiểu được bản chất của sự vật trong thế giới khách quan?',
            Option: [
            'Phương pháp luận', 
            'Khả tri luận',
            'Nhận thức luận', 
            'Bất khả tri luận'],
            AcpOption: 'Khả tri luận',
        },
        {
            index: 13,
            Question: 'Trong cuộc sống, nếu sự định hướng tư duy, xác định lý tưởng và nếp sống của các cá nhân khác nhau thì chất lượng hoạt động thực tiễn của mỗi cá nhân sẽ khác nhau. Theo anh/chị, sự khác nhau đó do yếu tố nào quyết định?',
            Option: [
            'Phương pháp luận', 
            'Thế giới quan',
            'Nhân sinh quan', 
            'Vũ trụ quan'],
            AcpOption: 'Thế giới quan',
        },
        {
            index: 14,
            Question: 'Vì sao Đảng ta khẳng định: Muốn giải quyết những ảnh hưởng tiêu cực của tôn giáo phải bắt đầu từ việc xóa bỏ hoàn toàn áp bức, bất công trong xã hội?',
            Option: [
            'Đó là nguyên nhân vật chất của sự hình thành tôn giáo', 
            'Đó là môi trường của sự hình thành tôn giáo',
            'Đó là nguyên nhân tinh thần của sự hình thành tôn giáo', 
            'Đó là của cải nuôi dưỡng và hình thành tôn giáo'],
            AcpOption: 'Đó là nguyên nhân vật chất của sự hình thành tôn giáo',
        },
        {
            index: 15,
            Question: 'Bằng phương pháp luận triết học Mác – Lênin, anh chị cho biết: Nhân tố nào sau đây có tính quyết định để Nick Vujicic từ người khuyết tật tứ chi bẩm sinh trở thành nhà diễn thuyết nổi tiếng thế giới?',
            Option: [
            'Có tư chất thông minh và điều kiện sống tốt', 
            'Có tư chất thông minh, có ý chí kiên cường, mạnh mẽ',
            'Có tư chất thông minh, có phương pháp thu hút nhiều người', 
            'Là người truyền bá kinh Phúc Âm nên Chúa phù hộ '],
            AcpOption: 'Có tư chất thông minh, có ý chí kiên cường, mạnh mẽ',
        },
        {
            index: 16,
            Question: 'Quan niệm về xã hội của nhà triết học Cantơ là gì khi nhấn mạnh: “Trở về với quá khứ là không thể có, đối với mục đích loài người, thì chỉ có một hướng là tiến lên”?',
            Option: [
            'Lịch sử xã hội vận động theo quy luật mà chúa trời đã tạo ra', 
            'Lịch sử xã hội là một quá trình thống nhất, phát triển theo những quy luật nội tại và tất yếu',
            'Lịch sử xã hội vận động tất yếu theo quy luật mà các đấng siêu nhiên đã vạch sẵn', 
            'Lịch sử xã hội là quá trình phát triển theo những quy luật nội tại của nó'],
            AcpOption: 'Lịch sử xã hội là một quá trình thống nhất, phát triển theo những quy luật nội tại và tất yếu',
        },
        {
            index: 17,
            Question: 'Vì sao thế giới quan đóng vai trò đặc biệt quan trọng trong cuộc sống của con người và xã hội loài người?',
            Option: [
            'Con người phải nhận thức đúng và khoa học về thế giới thì mới cải tạo thế giới thành công', 
            'Thế giới quan là vấn đề đầu tiên của triết học',
            'Vấn đề triết học đặt ra trước hết là vấn đề thực tiễn', 
            'Bằng khả năng của mình, con người có thể xây dựng thế giới thành công'],
            AcpOption: 'Con người phải nhận thức đúng và khoa học về thế giới thì mới cải tạo thế giới thành công',
        },
        {
            index: 18,
            Question: 'Theo quan điểm của triết học Mác-Lênin, muốn nhận thức đúng thế giới tự nhiên xung quanh, chúng ta phải bắt đầu từ:',
            Option: [
            'Tính chất vật chất và đời sống tinh thần', 
            'Những hiện tượng xung quanh ta',
            'Trình độ hiểu biết giải thích giới tự nhiên', 
            'Tính chất vật chất, từ sự vật, hiện tượng khách quan'],
            AcpOption: 'Tính chất vật chất, từ sự vật, hiện tượng khách quan',
        },
        {
            index: 19,
            Question: 'Theo anh/chị, câu tục ngữ nào sau đây thể hiện quan điểm duy tâm trong cuộc sống và sinh hoạt hàng ngày?',
            Option: [
            'Không ai giàu ba họ, không ai khó ba đời ', 
            'Sống chết có mệnh, giàu sang do trời',
            'Tay làm hàm nhai, tay quai miệng trễ', 
            'Qua sông thì phải lụy đò'],
            AcpOption: 'Sống chết có mệnh, giàu sang do trời',
        },
        {
            index: 20,
            Question: 'Vì sao tri thức (đặc biệt là tri thức khoa học) có tính quyết định trong việc hình thành thế giới quan cá nhân?',
            Option: [
            'Vì đó là điều kiện để cá nhân biến trí tuệ thông đạt thành thế giới quan', 
            'Vì đó là yếu tố quyết định để cá nhân biến lý tưởng, niềm tin thành hiện thực',
            'Vì đó là yếu tố trực tiếp để cá nhân biến lý trí, niềm tin thành hiện thực', 
            'Vì đó là điều kiện cơ bản để tình cảm, niềm tin thành hiện thực'],
            AcpOption: 'Vì đó là yếu tố quyết định để cá nhân biến lý tưởng, niềm tin thành hiện thực',
        },
        {
            index: 21,
            Question: 'Trường phái triết học nào khẳng định “Mọi sự vật, hiện tượng chỉ là phức hợp những cảm giác”? ',
            Option: [
            'Duy tâm chủ quan', 
            'Duy cảm',
            'Duy tâm khách quan', 
            'Duy lý'],
            AcpOption: 'Duy tâm chủ quan',
        },
        {
            index: 22,
            Question: 'Anh/chị vận dụng thế giới quan nào khi tham gia các hoạt động ngoại khóa, đội xung kích vì cộng đồng? Vì sao?',
            Option: [
            'Duy vật biện chứng. Vì đó là tiền đề quan trọng để xác lập phương thức tư duy hợp lý và nhân sinh quan tích cực trong khám phá và cải tạo thế giới', 
            'Duy vật. Vì nó là tiền đề xác lập nhân sinh quan tích cực và cải tạo thế giới ',
            'Duy vật siêu hình. Vì nó là tiền đề để khám phá và chinh phục thế giới ', 
            'Duy tâm khách quan. Vì nó là tiền đề để xác lập phương thức tư duy tích cực và cải tạo thế giới '],
            AcpOption: 'Duy vật biện chứng. Vì đó là tiền đề quan trọng để xác lập phương thức tư duy hợp lý và nhân sinh quan tích cực trong khám phá và cải tạo thế giới',
        },
        {
            index: 23,
            Question: 'Vì sao trong quá trình xây dựng và phát triển đất nước, Đảng ta khẳng định: Phải đổi mới tư duy lý luận?',
            Option: [
            'Đó là định hướng đúng đắn để giải quyết có hiệu quả các tồn tại của thời kỳ kinh tế bao cấp trước đó', 
            'Đó là định hướng đúng đắn để giải quyết có hiệu quả các vấn đề lý luận đặt ra ',
            'Đó là định hướng đúng đắn để giải quyết có hiệu quả các vấn đề do chiến tranh gây ra ', 
            'Đó là định hướng đúng đắn để giải quyết có hiệu quả các vấn đề thực tiễn đặt ra'],
            AcpOption: 'Đó là định hướng đúng đắn để giải quyết có hiệu quả các vấn đề thực tiễn đặt ra',
        },
        {
            index: 24,
            Question: 'Theo anh/chị, thế giới quan, phương pháp luận khoa học, cách mạng của triết học Mác - Lênin có vai trò như thế nào đối với con người?',
            Option: [
            'Chi phối hoạt động nhận thức và hoạt động thực tiễn', 
            'Quyết định hoạt động nhận thức và hoạt động thực tiễn',
            'Gắn liền với hoạt động nhận thức và hoạt động thực tiễn', 
            'Định hướng hoạt động nhận thức và hoạt động thực tiễn'],
            AcpOption: 'Định hướng hoạt động nhận thức và hoạt động thực tiễn',
        },
        {
            index: 25,
            Question: 'Theo anh/chị, Phật giáo Nguyên thủy đứng trên lập trường nào khi quan niệm: Quy luật Sinh - Trụ - Dị - Diệt của con người là do chuỗi 12 duyên - nghiệp chi phối và con người phải tuân theo các quy luật ấy?',
            Option: [
            'Thế giới quan duy vật và phương pháp luận biện chứng', 
            'Thế giới quan duy vật và phương pháp luận siêu hình',
            'Thế giới quan duy tâm và phương pháp luận biện chứng', 
            'Thế giới quan duy tâm và phương pháp luận siêu hình '],
            AcpOption: 'Thế giới quan duy tâm và phương pháp luận biện chứng',
        },
        {
            index: 26,
            Question: 'Tri thức khoa học có vai trò gì khi anh/chị đối diện cơ hội kinh doanh và việc làm với lời hứa đảm bảo “chắc chắn thành công 100%”?',
            Option: [
            'Giúp chúng ta đề phòng sự lừa gạt gây tổn thất kinh tế để thành công ', 
            'Giúp ta đánh giá chính xác những điều kiện thực thi, đánh giá rủi ro và kế hoạch phòng bị hạn chế tổn thất để thành công',
            'Giúp ta tránh được những tổn thất khi gặp rủi ro ngẫu nhiên ', 
            'Giúp ta có cơ hội lập nhiều phương án hành động để thành công '],
            AcpOption: 'Giúp ta đánh giá chính xác những điều kiện thực thi, đánh giá rủi ro và kế hoạch phòng bị hạn chế tổn thất để thành công',
        },
        {
            index: 27,
            Question: 'Luật di sản văn hóa (2001) đã tạo hành lang pháp lý cho các loại hình tín ngưỡng dân gian hồi phục, thu hút nhiều tầng lớp nhân dân tham gia, có tác động tích cực đối với đời sống tinh thần của cá nhân, gia đình và xã hội. Theo anh/chị, đó là nhóm loại hình nào sau đây?',
            Option: [
            'Thờ Mẫu, thờ cúng tổ tiên, xem bói, dâng sao giải hạn ', 
            'Tự do thờ phụng, tín ngưỡng, tôn giáo',
            'Tự do thờ phụng các tôn giáo độc thần và đa thần', 
            'Lễ chùa, thờ Mẫu, thờ cúng tổ tiên, thờ thần'],
            AcpOption: 'Lễ chùa, thờ Mẫu, thờ cúng tổ tiên, thờ thần',
        },
        {
            index: 28,
            Question: 'Quan niệm “mộc sinh hỏa, hỏa sinh thổ, thổ sinh kim, kim sinh thủy, thủy sinh mộc…” của người Phương Đông là biểu hiện quan niệm nào của triết học?',
            Option: [
            'Biện chứng tự phát', 
            'Biện chứng duy tâm',
            'Duy tâm chủ quan', 
            'Duy tâm khách quan'],
            AcpOption: 'Biện chứng tự phát',
        },
        {
            index: 29,
            Question: 'Tại sao trong giai đoạn hiện nay nước ta nhấn mạnh đổi mới kinh tế, đổi mới tư duy kinh tế nhưng cũng đồng thời khuyến khích các địa phương tổ chức các tuần lễ du lịch tâm linh và địa điểm du lịch tâm linh?',
            Option: [
            'Thể hiện sự thừa nhận có thế giới tâm linh chi phối quá trình phát triển kinh tế', 
            'Vì chưa chứng minh được thế giới có thần hay không có thần nên tôn trọng thế giới tâm linh là giải pháp tốt nhất',
            'Thể hiện sự tôn trọng hai giá trị tồn tại song song là giá trị tinh thần và giá trị vật chất ', 
            'Thể hiện sự tôn trọng các giá trị tinh thần, góp phần nâng cao chất lượng cuộc sống'],
            AcpOption: 'Thể hiện sự tôn trọng các giá trị tinh thần, góp phần nâng cao chất lượng cuộc sống',
        },
        {
            index: 30,
            Question: 'Vì sao con người lại tìm đến sự chở che của thần linh, thượng đế mỗi khi họ thất bại trong nghề nghiệp và cuộc sống?',
            Option: [
            'Muốn dựa vào sức mạnh siêu nhiên để thành công', 
            'Thiếu lý trí, thiếu niềm tin ở cuộc sống, muốn được an ủi bởi niềm tin hư ảo',
            'Muốn biết trước vận mệnh để thay đổi tương lai ', 
            'Con người là do các đấng tạo hóa sinh ra và quyết định số phận'],
            AcpOption: 'Thiếu lý trí, thiếu niềm tin ở cuộc sống, muốn được an ủi bởi niềm tin hư ảo',
        },
    ]);
    //let allQuestion=[];
    const link1=[
        '../Image/cau1.jpg',
        '../Image/cau2.jpg'
    ]
    //const [link,setlink]=useState('../Image/cau1.jpg')
    //let link = link1[0];
    //debugger;
    const [id, setid] = useState(0);
    const [point,setpoint] = useState(0);
    const [acp,setacp]=useState(null);
    const [wrong,setwrong]=useState(null);
    const [next,setnext]=useState(false);
    const [isOptionDisible,setisOptionDisible] = useState(false);
    const [showPoint,setshowPoint]=useState(false);

    {/*crawl data */}
    // function crawl() {
    //     axios.get('http://10.0.2.2:5000/dethisu')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
    //             let data1 = response.data;
    //             let data = [];
    //             for (let i = 0; i < data1.length; i++) {
    //                 let oj = {
    //                     index: data1[i].cau,
    //                     Question: data1[i].cauhoi,
    //                     Option: [data1[i].CauA, data1[i].CauB,data1[i].CauC, data1[i].CauD],
    //                     AcpOption: data1[i].DapAn,
    //                 }
    //                 data.push(oj);
    //                 //debugger;
    //             }
    //             //data;
    //             //allQuestion=data;
    //             setallQuestion(data);
    //             //console.log(data[0].Question)
    //             //debugger;
    //             return;
    //             //debugger;
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             debugger;
    //             console.log(error);
    //         })
    // }

    function checkAnswer(selectOption) {
        let acpAnswer = allQuestion[id].AcpOption;
        setacp(acpAnswer);
        setwrong(selectOption);
        setnext(true);
        setisOptionDisible(true);
        if(acpAnswer==selectOption)
        {
            setpoint(point+1);
        }
    }
    const handNext=()=>{
        if(id+1==allQuestion.length)
        {
            setshowPoint(true);
        }
        else
        {
            setid(id+1);
            setacp(null);
            setwrong(null);
            setisOptionDisible(false);
            setnext(false);
        }
    }
    const restartQuiz = () =>{
        setpoint(0);
        setid(0);
        setacp(null);
        setwrong(null);
        setisOptionDisible(false);
        setnext(false);
        setshowPoint(false);
        let rd=allQuestion;
        for(let i=0;i<rd.length;i++)
        {
            rd[i].Option.sort(()=>Math.random()-0.4);
        }
        rd.sort(()=> Math.random()-0.30);
        setallQuestion(rd);
    }

    const renderQuestion = (allQuestion) => {
        return (
            <View>
                <View style={{
                    //height: 100,
                    backgroundColor: "BB6BDA",
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        fontSize: 30,
                        marginRight: 10,
                        color: 'white',
                        fontFamily: "Times New Roman"
                    }}>Question</Text>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>{id + 1}</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>/{allQuestion.length} </Text>
                </View>
                <View style={{height: 1,backgroundColor: 'white',marginBottom: 10}}></View>
                <View style={{alignItems: 'center',justifyContent: 'center'}}>
                    <Text 
                        style={{
                            fontSize: 20,
                            color: 'white',

                        }}
                    >
                        {allQuestion[id].Question}
                    </Text>
                </View>
            </View>
            
        )
    }
    const renderOption = () => {
        {allQuestion};
        //debugger;
        return <View style={{
            marginHorizontal: 30, 
        }}>
            
            {allQuestion[id].Option.map(Option1 => (
                <TouchableOpacity 
                key={Option1}
                disabled={isOptionDisible}
                onPress={()=>checkAnswer(Option1)}
                style={{
                    borderWidth: 3, borderColor: Option1==acp ? 'green' : Option1==wrong ? 'red' : 'black',
                     borderRadius: 15,
                    alignItems: 'center',justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    marginVertical: 10,
                }}>
                    <Text style={{ fontSize: 20,color: 'white'}}>{Option1}</Text>
                    {
                        Option1==acp ? 
                            <View style={{
                                width: 30,height: 30,borderRadius: 15,
                                backgroundColor: 'green',
                                alignItems: 'center',justifyContent: 'center'
                            }}>
                                <MaterialCommunityIcons name="check" style={{color: 'white',fontSize: 20}}/>
                            </View>
                        : Option1==wrong ? 
                        <View style={{
                            width: 30,height: 30,borderRadius: 15,
                            backgroundColor: 'red',
                            alignItems: 'center',justifyContent: 'center'
                        }}>
                            <MaterialCommunityIcons name="close" style={{color: 'white',fontSize: 20}}/>
                        </View>
                        : null

                    }
                </TouchableOpacity>
            ))}
        </View>
    }
    const renderButtonNext = () =>{
        if(next==true)
        {
            return (
                <TouchableOpacity 
                    onPress={handNext}
                 style={{
                    marginTop: 20, backgroundColor: '#66CCFF', borderRadius: 5,marginHorizontal: 20,
                    height: 40,alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                )
        }
        else
        {
           return null
        }
    }
    const renderQuit=()=>{
        return <View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('TabBar')}
            >
                <Text>Thoát</Text>
            </TouchableOpacity>
        </View>
    }

    return <View style={{
        flex: 1,
        backgroundColor: '#4F2AAD',
        paddingVertical: 30,
        paddingHorizontal: 20,
    }}>

        {/*allQuestion.length==0 ? crawl(): <Text>{allQuestion[0].Question}</Text>*/}
    <ScrollView>
        {/*Quiz*/}
        {renderQuit()}

        {/* Question */}
        {renderQuestion(allQuestion)}
        
         <View style={{marginBottom: 30}}></View>   

        {/* Option */}
        {allQuestion.length==0 ? crawl(): renderOption()}

        {/* buttom next */}
        {renderButtonNext()}

        {/*show point  */}
        <Modal 
            animationType="slide"
            transparent={true}
            visible={showPoint}
        >
            <View style={{
                flex: 1,
                backgroundColor: '#4F2AAD',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    backgroundColor: 'white',
                    width: '90%',
                    padding: 20,
                    borderRadius: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        {point>allQuestion.length/2 ? 'Trên trung bình' : 'Còn tệ'}
                    </Text>
                    <View style={{
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Text
                            style={{
                                fontSize: 25, fontWeight: 'bold',
                                color: point>allQuestion.length/2 ? 'green' : 'red'
                            }}>
                            {point}
                        </Text>
                        <Text style={{fontSize: 20,fontWeight: 'bold'}}>/{allQuestion.length}</Text>
                    </View>
                    <Text style={{
                        fontSize: 25,
                        color: 'black'
                    }}> 
                        Điểm:  {10/allQuestion.length*point}
                    </Text>
                    <TouchableOpacity
                        onPress={restartQuiz}
                        style={{
                            backgroundColor: '#66CCFF',
                            padding: 20,
                            borderRadius: 20,
                            width: '100%',
                        }}>
                        <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'center'}}>Làm lại</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        </ScrollView>
    </View>
}
const styles = StyleSheet.create({

})
export default TracnghiemTriet;