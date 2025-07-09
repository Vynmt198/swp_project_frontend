// import React, { useState, useEffect } from 'react';
// import { motion } from "framer-motion";
// import blogImg from "../assets/blog.jpg";

// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
// } from "recharts";
// import {
//   Users, Syringe, Target, ChevronDown, FileText, X, ChevronRight,
// } from 'lucide-react';
// import Button from '../components/Button';
// const basicKnowledge = [
//   {
//     title: "Biểu hiện của HIV theo từng giai đoạn",
//     description: "Virus HIV có thể lây truyền ở bất kỳ giai đoạn nào trong quá trình nhiễm bệnh và nó sẽ phá hủy dần dần hệ thống miễn dịch của cơ thể. Do vậy, việc phòng chống lây nhiễm HIV và điều trị sớm là rất quan trọng. Ở mỗi giai đoạn, HIV lại có những biểu hiện bệnh khác nhau, chúng ta cần tìm hiểu để có phương pháp điều trị kịp thời.",
//     link: "https://www.vinmec.com/vie/bai-viet/bieu-hien-cua-hiv-theo-tung-giai-doan-vi"
//   },
//   {
//     title: "Điều trị ARV = Dự phòng HIV",
//     description: "Tỷ lệ tuân thủ điều trị ARV sau 12 tháng đạt 88%. Tải lượng vi rút dưới ngưỡng ức chế (<1.000 bản sao/ml máu) đạt 96%, dưới ngưỡng phát hiện (200 bản sao/ml máu) đạt 94%. Với tải lượng vi rút như vậy sẽ không chỉ giúp người nhiễm HIV sống khỏe mạnh mà còn góp phần giảm lây nhiễm HIV trong cộng đồng.",
//     link: "https://vaac.gov.vn/dieu-tri-arv-du-phong-hiv.html"
//   },
//   {
//     title: "Những điều cần biết về thuốc ARV - thuốc điều trị và dự phòng HIV",
//     description: "ARV là từ viết tắt của Antiretroviral, dùng để chỉ một nhóm gồm nhiều loại thuốc có tác dụng kháng HIV. HIV là virus gây suy giảm miễn dịch ở người. Khi HIV nhiễm vào cơ thể sẽ tấn công vào hệ thống miễn dịch khiến người bệnh dễ mắc các bệnh nhiễm trùng khác như lao, và một số bệnh ung thư,.. ",
//     link: "https://hellobacsi.com/thuoc/thuoc-arv/"
//   },
//   {
//     title: "HIV và AIDS có khác nhau?",
//     description: "HIV/AIDS là căn bệnh thế kỷ có khả năng tấn công và phá hủy hệ miễn dịch của cơ thể. Đặc biệt đây là bệnh truyền nhiễm nguy hiểm có thể tấn công bất kì ai, lây nhiễm HIV không phân biệt tuổi tác, gia đình, nghề nghiệp, địa vị xã hội ...",
//     link: "https://www.vinmec.com/vie/bai-viet/hiv-va-aids-co-khac-nhau-vi"
//   },
// ];
// const treatmentArticles = [
//   {
//     title: "Vai trò của tuân thủ trong điều trị HIV/AIDS và một số giải pháp giúp tuân thủ",
//     description:
//       "Tuân thủ là điều cốt lõi cho sự thành công của điều trị thuốc ARV đem lại hiệu quả cho điều trị và điều trị dự phòng các nhiễm trùng cơ hội..",
//     link: "https://cdcvinhphuc.vn/vai-tro-cua-tuan-thu-trong-dieu-tri-hiv-aids-va-mot-so-giai-phap-giup-tuan-thu/",
//   },
//   {
//     title: "Dinh dưỡng cho bệnh nhân đang điều trị HIV",
//     description:
//       "Thiết lập chế độ ăn uống lành mạnh và dinh dưỡng trong quá trình điều trị HIV sẽ giúp bệnh nhân tăng cường hệ miễn dịch, đồng thời đẩy lùi nguy cơ mắc các biến chứng do virus HIV gây ra.",
//     link: "https://www.vinmec.com/vie/bai-viet/dinh-duong-cho-benh-nhan-dang-dieu-tri-hiv-vi",
//   },
// ];

// const documents = [
//   {
//     title: "Hướng dẫn điều trị HIV cho người mới phát hiện",
//     description:
//       "Tài liệu cơ bản giúp bạn hiểu về các bước điều trị ban đầu, xét nghiệm cần thiết và tư vấn tâm lý.",
//     link: "https://www.prepwatch.org/wp-content/uploads/2019/05/Care_and_Treatment_Guidelines_Vietnam_2017.pdf",
//   },
//   {
//     title: "Tài liệu giáo dục phòng ngừa HIV",
//     description:
//       "Thông tin giúp bạn hiểu cách phòng tránh lây nhiễm HIV trong cộng đồng và trong gia đình.",
//     link: "https://asttmoh.vn/wp-content/uploads/2015/05/Tai-lieu-dao-tao-HIV.AIDS-Trung-cap-Y.pdf",
//   },
// ];

// const blogPosts = [
//   {
//     title: "Người sẻ chia khủng hoảng, buồn vui cùng bệnh nhân HIV",
//     description:
//       "SKĐS - Người nhiễm HIV thường nghĩ rằng, họ sẽ nhận được sự kỳ thị, xa lánh... thay vì thương cảm, sẻ chia từ cộng đồng.",
//     link: "https://bvquan5.medinet.gov.vn/chuyen-muc/nguoi-se-chia-khung-hoang-buon-vui-cung-benh-nhan-hiv-c16896-131217.aspx",
//   },
//   {
//     title: "8 cách để hỗ trợ điều trị HIV hiệu quả và tăng cường hệ miễn dịch",
//     description:
//       "Thuốc điều trị HIV là chìa khóa để bệnh nhân HIV khỏe mạnh khi sống chung với loại virus này.",
//     link: "https://vaac.gov.vn/8-cach-de-ho-tro-dieu-tri-hiv-hieu-qua-va-tang-cuong-he-mien-dich.html",
//   },
//   {
//     title: "Lời khuyên bổ ích cho người nhiễm HIV/AIDS",
//     description:
//       "Đối với những người nhiễm HIV/AIDS, cần thêm vitamin và khoáng chất để giúp sửa chữa và chữa lành các tế bào bị hư hỏng.",
//     link: "https://moh.gov.vn/chuong-trinh-muc-tieu-quoc-gia/-/asset_publisher/7ng11fEWgASC/content/loi-khuyen-bo-ich-cho-nguoi-nhiem-hiv-aids",
//   },
// ];

// const faqItems = [
//   {
//     question: "HIV là gì và lây truyền qua những con đường nào?",
//     shortAnswer:
//       "HIV là virus gây suy giảm miễn dịch, lây qua máu, tình dục không an toàn và từ mẹ sang con.",
//     detailedContent: (
//       <>
//         <p className="text-gray-700 mb-3">
//           HIV (Human Immunodeficiency Virus) là virus làm suy yếu hệ thống miễn dịch của con người, khiến cơ thể dễ mắc các bệnh nhiễm trùng và ung thư.
//         </p>
//         <p className="text-gray-700 mb-3 font-semibold">Các con đường lây truyền chính:</p>
//         <ul className="list-disc pl-5 mb-4 text-gray-700">
//           <li>Quan hệ tình dục không an toàn (qua đường âm đạo, hậu môn, hoặc miệng nếu có vết thương)</li>
//           <li>Dùng chung kim tiêm hoặc các dụng cụ tiêm chích</li>
//           <li>Truyền máu hoặc chế phẩm máu nhiễm HIV (rất hiếm hiện nay do sàng lọc máu tốt)</li>
//           <li>Truyền từ mẹ sang con trong thai kỳ, lúc sinh hoặc cho con bú</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     question: "Người nhiễm HIV có thể sống bình thường không?",
//     shortAnswer:
//       "Với điều trị ARV đúng cách, người nhiễm HIV có thể sống khỏe mạnh và gần như bình thường.",
//     detailedContent: (
//       <>
//         <p className="text-gray-700 mb-3">
//           Ngày nay, HIV không còn là án tử. Nhờ điều trị bằng thuốc kháng virus (ARV), người nhiễm HIV có thể sống lâu dài, khỏe mạnh, và hòa nhập cộng đồng.
//         </p>
//         <ul className="list-disc pl-5 mb-4 text-gray-700">
//           <li>Tuân thủ điều trị giúp giảm tải lượng virus xuống mức không thể phát hiện</li>
//           <li>Người nhiễm HIV có thể làm việc, học tập, sinh hoạt, lập gia đình như người không nhiễm</li>
//           <li>Phụ nữ nhiễm HIV vẫn có thể sinh con khỏe mạnh nếu điều trị đúng cách</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     question: "Làm thế nào để phòng tránh lây nhiễm HIV?",
//     shortAnswer:
//       "Sử dụng bao cao su, không dùng chung kim tiêm, xét nghiệm định kỳ và điều trị sớm nếu nhiễm.",
//     detailedContent: (
//       <>
//         <p className="text-gray-700 mb-3">
//           Phòng tránh HIV hiệu quả bằng cách thay đổi hành vi và duy trì các biện pháp an toàn:
//         </p>
//         <ul className="list-disc pl-5 mb-4 text-gray-700">
//           <li>Luôn dùng bao cao su đúng cách khi quan hệ tình dục</li>
//           <li>Không dùng chung bơm kim tiêm hoặc dụng cụ có thể gây chảy máu</li>
//           <li>Xét nghiệm HIV định kỳ, đặc biệt là nhóm nguy cơ</li>
//           <li>Tham gia điều trị dự phòng trước phơi nhiễm (PrEP) nếu có nguy cơ cao</li>
//           <li>Phụ nữ mang thai cần kiểm tra HIV sớm để can thiệp kịp thời</li>
//         </ul>
//       </>
//     ),
//   },
// ];

import React, { useState, useEffect } from 'react';
import { BookOpenText, LoaderCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KnowledgePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-600">
        <LoaderCircle className="animate-spin mr-2" /> Đang tải dữ liệu...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <BookOpenText className="w-8 h-8 text-blue-600" />
        Kiến Thức Về HIV
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-md p-5 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="text-lg font-semibold text-blue-700 mb-2">
              {blog.title}
            </div>
            <p className="text-sm text-gray-600 mb-2">{blog.description}</p>
            <div className="text-sm text-gray-400 mb-2">
              <span>🖊 {blog.author}</span> •{' '}
              <span>🗓 {new Date(blog.createdAt).toLocaleDateString('vi-VN')}</span>
            </div>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium text-blue-500 hover:underline"
            >
              Đọc thêm →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
