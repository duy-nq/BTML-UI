import React from "react";
import QnA from "./Question";

export function SPContent (props) {
    return (
        <div style={{width: '-webkit-fill-available', height: '100%', paddingLeft: 20, paddingRight: 30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', border: '2px rgba(106.58, 135.72, 239.05, 0.73) solid', margin:'5px 0px'}}>
            <div style={{alignSelf: 'stretch', color: '#5867EC', fontSize: 36, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Tại sao nên lựa chọn FastService?</div>
            <div style={{alignSelf: 'stretch', height: 155, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 19, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chúng tôi cung cấp dịch vụ chuyên nghiệp, đội ngũ kỹ thuật viên được đào tạo chuyên sâu và kinh nghiệm, đảm bảo khắc phục sự cố của máy lạnh hoạt trong thời gian sớm nhất.</div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>FastService cam kết sửa chữa nhanh chóng, đáng tin cậy và giá cả hợp lý, mang lại sự thoải mái và tiện lợi cho khách hàng.</div>
            </div>
        </div>
    );
}

export function FAQs(props) {
    return (
        <div style={{width: '-webkit-fill-available', height: '100%', paddingLeft: 20, paddingRight: 30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', border: '2px rgba(106.58, 135.72, 239.05, 0.73) solid', margin:'0px 0px 5px 0px'}}>
            <div style={{alignSelf: 'stretch', color: '#5867EC', fontSize: 36, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Câu hỏi thường gặp</div>
            <div style={{width: '100%', height: '100%', padding: '0px 10px 10px 0px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                <QnA 
                    question='Bảo trì máy lạnh cần thiết không?'
                    answer='Bảo trì máy lạnh là cực kỳ cần thiết vì nó giúp duy trì hiệu suất hoạt động của máy, kéo dài tuổi thọ và giảm nguy cơ hỏng hóc đột ngột.'
                />
                <QnA 
                    question='Tại sao cần phải thực hiện bảo trì định kỳ cho máy lạnh?'
                    answer='Bảo trì định kỳ giúp phát hiện và khắc phục sự cố nhỏ trước khi chúng trở thành vấn đề lớn, giúp máy lạnh hoạt động mạnh mẽ và hiệu quả hơn.'
                />
                <QnA 
                    question='Bảo trì máy lạnh có giúp tiết kiệm năng lượng không?'
                    answer='Chắc chắn! Bảo trì định kỳ giúp máy lạnh hoạt động hiệu quả hơn, tiêu tốn ít năng lượng hơn, và giúp giảm hóa đơn tiền điện.'
                />
                <QnA 
                    question='Làm thế nào để đặt lịch bảo trì máy lạnh tại FastService?'
                    answer='Để đặt lịch bảo trì máy lạnh tại FastService, bạn có thể gọi điện hoặc truy cập trang web của chúng tôi để đặt hẹn trước.'
                />
                <QnA 
                    question='Kỹ thuật viên của FastService có kinh nghiệm không?'
                    answer='Đội ngũ kỹ thuật viên của FastService được đào tạo chuyên sâu, có kinh nghiệm và kiến thức sâu rộng về các hệ thống máy lạnh, đảm bảo sự tin cậy và chất lượng cho khách hàng.'
                />
                <QnA 
                    question='FastService có cam kết về chất lượng dịch vụ không?'
                    answer='Có, FastService cam kết về chất lượng dịch vụ. Chúng tôi luôn đặt chất lượng lên hàng đầu và nỗ lực mang đến sự hài lòng tối đa cho khách hàng. Đội ngũ kỹ thuật viên của chúng tôi được đào tạo chuyên sâu và có kinh nghiệm, đảm bảo thực hiện các dịch vụ bảo trì máy lạnh một cách chuyên nghiệp và hiệu quả. Chúng tôi luôn lắng nghe ý kiến phản hồi của khách hàng để không ngừng cải thiện và nâng cao chất lượng dịch vụ của mình.'
                />
            </div>
        </div>
    );
}